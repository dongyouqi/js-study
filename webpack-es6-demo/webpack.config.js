var path = require('path');
module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'es6'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
