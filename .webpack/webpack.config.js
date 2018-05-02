const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base.js");

const config = {
    entry: path.resolve(__dirname, "../src/app.ts"),
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        contentBase: path.resolve(__dirname, "../public"),
        hot: true,
        compress: false,
        inline: true,
        stats: {
            colors: true
        },
        watchOptions: {
            ignored: /node_modules/
        }
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../public")
    }
};

module.exports = merge(baseConfig, config);
