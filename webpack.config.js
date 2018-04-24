const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app: './src/main.js'
    },
    devServer: {
        open: true,
        contentBase: './dist'
    },
    module:{
        
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bandle.js'
    }
}