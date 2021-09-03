const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    "in.scss": "./src/in.scss"
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: "../"
          }
        },
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass")
          }
        }
      ]
    }, { // for the demo html only
      test: /\.html?$/,
      use: [{
        loader: "html-loader",
        options: {
          sources: false
        }
      }]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].min.css"
    }),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};