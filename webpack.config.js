
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
const base = require('./webpack.config.base.js')

module.exports = {
    // 这个的意思就是把 base 的所有属性抄过来
    ...base,
    devtool: "inline-source-map",
    devServer: {
        contentBase:"./dist"
    },
    module: {rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}
