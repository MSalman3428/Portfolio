/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // enables static export
  images: {
    unoptimized: true,     // disables image optimization (needed for static export)
  },
}

module.exports = nextConfig;
