var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var mainPath = "./src/main/";
var webappPath = mainPath + "webapp/";
var distPath = webappPath + "dist/";

module.exports = {
  entry: './src/main/resources/static/app.js',
  devtool: 'eval',
  cache: true,
  debug: true,
  output: {
    filename: "app.js",
    chunkFilename: "chunks/app.[hash].js",
    publicPath: "dist/js/",
    path: distPath + "/js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, '.'),
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
};