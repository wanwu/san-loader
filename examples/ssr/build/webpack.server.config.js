const SanLoaderPlugin = require('san-loader/lib/plugin');
const path = require('path');

module.exports = {
    entry: './src/entry-server.js',
    devtool: 'cheap-source-map',
    target: 'node',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'server_bundle.js',
        libraryTarget: 'commonjs2'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.san$/,
                loader: 'san-loader-next'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.less$/,
                use: ['node-style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new SanLoaderPlugin()
    ]
};
