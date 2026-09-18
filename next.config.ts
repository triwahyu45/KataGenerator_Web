import type { NextConfig } from "next";

// When deployed to GitHub Pages via GitHub Actions (repo name: KataGenerator_Web)
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "KataGenerator_Web";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
