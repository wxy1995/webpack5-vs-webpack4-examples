// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { ModuleFederationPlugin } = require("webpack").container;
// const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: process.env.NODE_ENV || "development",
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   port: 3001,
  // },
  // output: {
  //   publicPath: "http://localhost:3001/",
  // },
  optimization: {
    minimize: false,
  },
  resolve: {
    alias: {
      crypto: false
    },
  }
};