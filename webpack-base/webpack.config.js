const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  entry: './src/index.js',

  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  }
};
