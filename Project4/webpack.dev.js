const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")


console.log(__dirname)

module.exports = {
   
    entry: './client/index.js',
    context: path.resolve(__dirname, './src'),
    mode: 'development',
    devServer: {
        contentBase: "./src/client/views",
        hot: true
    },
    
    plugins:[
        new HtmlWebPackPlugin({
            template: "./client/views/index.html",
            filename: "./index.html"
        })
    ],

    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
        ]
    }
}