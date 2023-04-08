const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = {
  //mode development or production
  mode: 'development',
  //entry index.jsx
  entry: path.resolve(__dirname, './client/src/index.jsx'),
  //output an object path filename
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader'
        },
        test: /\.jsx?$/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip"
    }),
    new BrotliPlugin()
  ]

}