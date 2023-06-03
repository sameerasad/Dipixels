/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
//  rules:{
//   "@next/next/no-img-element": "off"
//  },
 eslint: {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: true,
},
}


const withVideos = require('next-videos')

module.exports = withVideos()

// const withImages = require('next-images');

// module.exports = withImages();
