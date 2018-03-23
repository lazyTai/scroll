var webpack = require('webpack');
var path = require('path')
var configBase = require('./webpack.base')

configBase.output.library = 'tScroll';
configBase.output.libraryTarget = 'UMD';

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
let webpackConfig = {
    entry: configBase.entry,
    output: configBase.output,
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'),],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader|css-loader',
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         // name: utils.assetsPath('img/[name].[hash:7].[ext]')
            //     }
            // },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            //     }
            // }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
    ]
}

module.exports = webpackConfig;