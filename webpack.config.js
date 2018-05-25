var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'public');


const devMode = process.env.NODE_ENV !== 'production';

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'js/bundle.js',
        publicPath: ''
    },
    optimization: {
        minimizer: [
            new HtmlWebpackPlugin({
                template: APP_DIR + '/index.html',
                inject: false
            }),
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "styles/styles.css"
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new webpack.BannerPlugin({
            banner: "Author : 'Vishnu Chandran' hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]"
        })
    ],
    module: {
        rules: [{
                test: /\.jsx?/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|gif|woff|woff2)$/,
                loader: 'url-loader?limit=100000&name=fonts/[name].[ext]'
            },
            {
                test: /\.(ttf|otf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?outputPath=fonts/'
            },
            {
                test: /\.(jpg|svg)$/,
                loader: 'file-loader?outputPath=images/&name=[name].[ext]'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        watchContentBase: true,
        compress: true,
        port: 9000
    },
    watch: true
};

module.exports = config;