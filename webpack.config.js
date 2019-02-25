const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var path = require('path');
var webpack = require('webpack');

const PATHS = {
  build: path.join(__dirname, 'dist')
};

const ASSET_PATH = process.env.ASSET_PATH || '/';
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => [
  {
  entry: './src/index.js',
  output: {
    path: PATHS.build,
    publicPath: ASSET_PATH,
    filename: 'app-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: "url-loader"
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
      },      
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV),
        'ASSET_PATH': JSON.stringify(ASSET_PATH)
      }
    }),
  ]
}];
