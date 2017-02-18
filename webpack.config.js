var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

var isProduction = process.env.NODE_ENV === 'production';
var productionPluginDefine = isProduction ? [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}})
] : [];
var clientLoaders = isProduction ? productionPluginDefine.concat([
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false })
]) : [];

var commonLoaders = [
    {
        test: /\.json$/,
        loader: 'json-loader'
    }
];

module.exports = [
    {
        entry: './src/app/javascripts/home.jsx',
        output: {
            path: './dist/assets/javascripts',
            publicPath: '/',
            filename: 'home.js'
        },
        plugins: clientLoaders.concat([
            new ExtractTextPlugin('index.css', {
                allChunks: true
            })
        ]),
        module: {
            loaders: [
                {
                    test: /\.jsx$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('css!sass')
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }
];
