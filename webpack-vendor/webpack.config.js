
var webpack = require('webpack');

module.exports = {
  entry: {
    index: __dirname + "/app/main.js",
    vendor: ['jquery','angular']
  },
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "[name].[chunkHash:8].js",
    publicPath: '/app',
    chunkFilename: "[name].[chunkHash:8].js"
  },
  plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
        }),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV:  JSON.stringify("production")}
          })
    ]

}
