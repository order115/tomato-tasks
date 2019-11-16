const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       test: /\.js(\?.*)?$/i,
  //       exclude: '/node_modules/',
  //       sourceMap: true,
  //       extractComments: {
  //         condition: /^\**!|@preserve|@license|@cc_on/i,
  //         filename: baseWebpackConfig.externals.paths.assets + 'js/extracted-comments.js',
  //         banner: (licenseFile) => {
  //           return `License information can be found in ${licenseFile}`;
  //         }
  //       }
  //     }),
  //   ],
  // },
  plugins: [

  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})