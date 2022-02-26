const SanLoaderPlugin = require('san-loader/lib/plugin');
const path = require('path');

module.exports = {
    entry: './src/entry-client.js',
    devtool: 'cheap-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'client_bundle.js'
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
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new SanLoaderPlugin()
    ]
};
