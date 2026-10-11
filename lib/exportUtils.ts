import { toBlob, toPng, toJpeg } from 'html-to-image';
import confetti from 'canvas-confetti';

export interface ExportOptions {
  pixelRatio?: number; // 1 = 1x, 2 = 2x Retina, 4 = 4x Ultra HD
  quality?: number;    // 0.1 to 1.0
  format?: 'png' | 'jpeg';
  filename?: string;
  transparent?: boolean;
}

export async function exportElementAsImage(
  element: HTMLElement,
  options: ExportOptions = {}
): Promise<string> {
  const {
    pixelRatio = 3,
    quality = 0.98,
    format = 'png',
    filename = `katagenerator-${Date.now()}.${format}`,
    transparent = false
  } = options;

  const filter = (node: HTMLElement) => {
    // Exclude resize handles, floating tools, or UI overlays during capture
    return !node.classList?.contains('no-export');
  };

  const config = {
    quality,
    pixelRatio,
    filter,
    backgroundColor: transparent ? undefined : undefined,
    cacheBust: true
  };

  let dataUrl: string;
  if (format === 'jpeg') {
    dataUrl = await toJpeg(element, { ...config, backgroundColor: '#ffffff' });
  } else {
    dataUrl = await toPng(element, config);
  }

  // Trigger download
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  link.click();

  // Trigger celebratory confetti
  try {
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.85 }
    });
  } catch (e) {
    // Ignore if blocked
  }

  return dataUrl;
}

export async function copyElementToClipboard(
  element: HTMLElement,
  pixelRatio: number = 3
): Promise<boolean> {
  try {
    const blob = await toBlob(element, {
      pixelRatio,
      cacheBust: true,
      filter: (node: HTMLElement) => !node.classList?.contains('no-export')
    });

    if (!blob) {
      throw new Error('Failed to create image blob');
    }

    if (navigator.clipboard && window.ClipboardItem) {
      const item = new ClipboardItem({ 'image/png': blob });
      await navigator.clipboard.write([item]);

      try {
        confetti({
          particleCount: 35,
          spread: 50,
          origin: { y: 0.85 }
        });
      } catch (e) {}

      return true;
    } else {
      throw new Error('ClipboardItem API not supported in this browser');
    }
  } catch (err) {
    console.error('Copy to clipboard failed:', err);
    throw err;
  }
}

export async function shareElementAsImage(
  element: HTMLElement,
  title: string = 'Stiker KataGenerator'
): Promise<boolean> {
  try {
    const blob = await toBlob(element, {
      pixelRatio: 3,
      cacheBust: true,
      filter: (node: HTMLElement) => !node.classList?.contains('no-export')
    });

    if (!blob) throw new Error('Blob generation failed');

    const file = new File([blob], `katagenerator-${Date.now()}.png`, { type: 'image/png' });

    if (typeof navigator !== 'undefined' && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title,
        text: 'Stiker dibuat dengan KataGenerator: https://triwahyu45.github.io/KataGenerator_Web/'
      });
      return true;
    } else {
      // Fallback: copy to clipboard
      return await copyElementToClipboard(element, 3);
    }
  } catch (err: any) {
    if (err?.name === 'AbortError') {
      return false; // User closed the native share dialog without sharing
    }
    console.error('Share failed:', err);
    throw err;
  }
}
