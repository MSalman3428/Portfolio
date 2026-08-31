import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
// Replace 'Portfolio' with your exact GitHub repository name
const repoName = "Portfolio"; 

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static exports on GitHub Pages
  },
  // Automatically sets the subfolder path when building on GitHub Actions
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;