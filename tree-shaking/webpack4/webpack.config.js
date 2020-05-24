// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { ModuleFederationPlugin } = require("webpack").container;
// const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: process.env.NODE_ENV || "development",
  optimization: {
    minimize: false,
  }
};