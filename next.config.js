/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true }
}

module.exports = nextConfig
// // const withImages = require('next-images');
// const withFonts = require('next-fonts');
// const withPlugins = require('next-compose-plugins');

// const nextConfig = {
//   webpack: config => {
//     config.module.rules.push({
//       test: /\.(pdf|docx?)$/,
//       use: 'file-loader',
//     });
//     return config
//   },
//   images: {
//     domains: ['drive.google.com']
//   }
// };

// module.exports = withPlugins([ withFonts], nextConfig);
