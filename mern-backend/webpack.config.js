const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js",
    publicPath: "/dist/",
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
