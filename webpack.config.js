var webpack = require('webpack');
module.exports = {
    entry: "./assets/js/buildScript.js",
    output: {
        path: __dirname,
        filename: "./assets/js/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};