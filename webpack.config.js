const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: [['resolver', { resolveDirs: ['src'] }]]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
                ),
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style', 'css'
                ),
                exclude: path.join(__dirname, 'src')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css', {
            allChunks: true
        })
    ],
    resolve: {
        alias: {
            commonCss: path.join(__dirname, 'src', 'style')
        }
    },
    devServer: {
        proxy: {
            '/api/**': {
                target: 'http://localhost:8000'
            }
        }
    },
    devtool: 'source-map'
}