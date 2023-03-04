const path = require('path');

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
  //module object rules
  //  rules will be an array with a nested object
  //    use loader
  //    test jsx regex
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
      }
    ]
  }

}