const nextBuildId = require('next-build-id')
const path = require('path');

module.exports = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}