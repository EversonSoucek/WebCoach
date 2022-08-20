const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new CopyWebpackPlugin({
        patterns: [
            {from: './css', to: 'css'}
        ]
    })
    ]
}
