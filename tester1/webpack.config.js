var webpack = require("webpack");
const json = require('json-loader!./file.json');

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
        publicPath: "assets",
    },
    devServer: {
        inline: true,
        contentBase: __dirname + '/dist',
        port: 2000
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                enforce: "pre",
                loader: "babel-loader",
                query: {
                    presets: ["latest", "stage-0", "react"]
                }

            },

            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: "json-loader"
            }

        ]
    }
}