const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },

  devServer: {
    hot: true,
    contentBase: './dist'
  }

  // watch: true,
  // watchOptions: {
  //   // 默认为空,不监听的文件或者文件夹,支持正则匹配
  //   ignored: /node_modules/,
  //   // 监听到变化发生后等300ms再去执行,默认300ms
  //   aggregateTimeout: 300,
  //   // 判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的,默认每秒问1000次
  //   poll: 1000
  // }
};
