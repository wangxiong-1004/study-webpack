const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'none',

  entry: {
    library: './src/index.js',
    'library.min': './src/index.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'libraryName',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        include: /\.min\.js$/
      })
    ]
  }
};
