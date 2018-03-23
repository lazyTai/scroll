var path = require('path')

module.exports = {
    entry: {
        scroll:path.resolve(__dirname,
            '../src/scroll'),

    },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: '[name]/[name].js',
        publicPath: 'dist',
    }
}