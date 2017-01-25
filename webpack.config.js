var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path')


module.exports = {

    entry: {
        app: [
            './source/javascripts/app.js',
            './source/stylesheets/app.scss'
        ]
    },

    output: {
        path: './.tmp/dist/resources',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            // smaller files -> directly include in source
            // { test: /\.(svg|png|gif)$/, loader: '!!url-loader?limit=10000'},

            // larger files
            { test: /\.(eot|svg|ttf|woff|woff2|otf|png|gif)$/, loader: 'file-loader?name=[name].[hash].[ext]'},

            // JS
            { test: /.*\.js$/, exclude: /(node_modules|\.tmp|build)/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}},

            // SCSS
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css?sourceMap!resolve-url-loader!sass?sourceMap"), exclude: [/node_modules/] }, // sassLoader will include node_modules explicitly
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize&sourceMap")  },

        ],
    },

    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },

    plugins: [

        // CSS output file
        new ExtractTextPlugin("bundle.css", {allChunks: true}),

        // Make React globally available
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),

        require('autoprefixer'),

        // Remove/clean build folder before building
        // new CleanWebpackPlugin('build')

    ],
    sassLoader: {
        includePaths: [path.resolve(__dirname, "node_modules")]
    }

};