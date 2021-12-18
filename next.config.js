const withImages = require('next-images')

module.exports = {
    ...withImages(),
    webpack: (config, options) => {
      config.module.rules.push(
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        }
      )
      return config
    },
}
