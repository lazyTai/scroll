var configBase = require("./webpack.base")
var webpack = require('webpack');
var path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
configBase.output.library = 'tScroll';
configBase.output.libraryTarget = 'umd';
let webpackConfig = {
    watch: true,
    devtool: 'source-map',
    entry: configBase.entry,
    output: configBase.output,
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
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
    ]
}

module.exports = webpackConfig;