﻿var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        application: './src/main/resources/public/temp/app.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + 'dest'
    },
    externals: {
        "entcore/entcore": "entcore",
        "entcore": "entcore",
        "entcore/libs/moment/moment": "entcore",
        "entcore/libs/underscore/underscore": "entcore",
        "entcore/libs/jquery/jquery": "entcore",
        "angular": "angular"
    },
    resolve: {
        modulesDirectories: ['bower_components', 'node_modules'],
        root: path.resolve(__dirname),
        extensions: ['', '.js']
    },
    devtool: "source-map",
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    }
}