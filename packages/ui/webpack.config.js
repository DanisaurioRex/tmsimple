const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	devServer: {
		client: { overlay: false },
	},
	entry: {
		main: './src/index.jsx',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(css)$/,
				use: ['style-loader', { loader: 'css-loader' }],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name].[ext]',
				}
			},

			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: './fonts/[name].[ext]',
				}
			}
		],
	},
	plugins: [
		isDevelopment && new ReactRefreshPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/index.html')
		}),
	].filter(Boolean),
	resolve: {
		// allows us to do absolute imports from "src"
		modules: [path.join(__dirname, 'src'), 'node_modules'],
		extensions: ['*', '.js', '.jsx'],
	},
};