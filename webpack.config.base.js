
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'my project',
            template: 'src/assets/test.html'
        })
    ],
    module: {
        rules: [
            {
            },
        ],
    },
}
