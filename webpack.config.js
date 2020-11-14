var path = require('path');
var HtmlWebpackLoader = require("html-webpack-plugin");
var MiniExtractPlugin = require("mini-css-extract-plugin");
const { optimize } = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    
    entry: {
        app: './src/index.js'
    },

    output: {
        publicPath: './',
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
    },  

    
    mode: "development",

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 1999,
        writeToDisk: true,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        }
                    }
                ]
            },

           
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    //'style-loader',
                    {
                        loader: MiniExtractPlugin.loader, 
                        options: {
                            publicPath: '../'
                        }
                        },
                    'css-loader',
                    'sass-loader'
                ]   
            },
            

            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [

                    {
                        loader: "file-loader",
                        options: {
                        name: '[name].[ext]',
                        outputPath: "images",                
                        }
                    }
                ]
            },

            {
                test: /\.(eot|woff|woff2|ttf)$/i,
                use: [

                    {
                        loader: "file-loader",
                        options: {
                        name: '[name].[ext]',
                        outputPath: "fonts",                
                        }
                    }
                ]
            },

        ]
    },

    plugins: [
        new HtmlWebpackLoader({
            filename: "index.html",
            template: "./src/index.html",
        }),

        new HtmlWebpackLoader({
            filename: "WayFreelancer.html",
            template: "./src/WayFreelancer.html",
        }),

        new HtmlWebpackLoader({
            filename: "book-UserExperience.html",
            template: "./src/book-UserExperience.html",
        }),

        new HtmlWebpackLoader({
            filename: "book-Html5.html",
            template: "./src/book-Html5.html",
        }),

        new MiniExtractPlugin({filename: "css/style.css"}),

        new OptimizeCssAssetsPlugin({}),

    ],

};

