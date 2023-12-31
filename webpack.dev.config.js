const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js'],
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].js',
	},
	mode: 'development',
	target: 'web',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					}
				],
			},
			{ 
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
				test: /\.(png|jpe?g|gif)$/i,
				use: [{ loader: 'file-loader' }],
			},
		],
	},
 	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/html/index.html",
			filename: "./index.html",
			excludeChunks: [ 'server' ]
		}),
 		new webpack.HotModuleReplacementPlugin(),
 		new webpack.NoEmitOnErrorsPlugin(),
  ],
};