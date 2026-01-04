const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const webpack = require('webpack');
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
    entry: './src/index',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        historyApiFallback: true,
        allowedHosts: 'all',
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        hot: true,
        host: '0.0.0.0',
    },
    output: {
        publicPath: 'auto',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                resolve: {
                    fullySpecified: false,
                }
            }
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                mainApp: 'mainApp@/main/remoteEntry.js',
                analystApp: 'analystApp@/analyst/remoteEntry.js',
                qcApp: 'qcApp@/qc/remoteEntry.js',
            },
            shared: {
                react: { singleton: true, eager: true, requiredVersion: false },
                'react-dom': { singleton: true, eager: true, requiredVersion: false },
                'react-router-dom': { singleton: true, eager: true, requiredVersion: false },
            },
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new webpack.DefinePlugin({
            'process.env.VITE_API_BASE_URL': JSON.stringify('http://localhost:4000'),
        }),
    ],
};
