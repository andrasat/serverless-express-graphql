const slsw = require('serverless-webpack');
const nodeExt = require('webpack-node-externals');

module.exports = {
	entry: slsw.lib.entries,
	target: 'node',
	devtool: 'source-map',
	externals: [nodeExt()],
	mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
	optimization: {
		minimize: false,
	},
	performance: {
		hints: false,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: __dirname,
				exclude: /node_modules/
			}
		]
	}
};