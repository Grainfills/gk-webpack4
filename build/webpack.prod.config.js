let webpack = require('webpack');
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseWebpackConfig = require("./webpack.base.config");

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        filename: 'js/[name].[chunkhash].js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader']
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader', "less-loader"]
        }, {
            test: /\.s[ac]ss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader', "sass-loader"]
        }, {
            test: /\.styl$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader', "stylus-loader"]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html"
        }),

        new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(zh-cn)$/)
    ]
});