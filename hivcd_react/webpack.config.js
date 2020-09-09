var path = require('path');
var webpack = require('webpack');

module.export = {
	entry: "./src/index.js",
	output: {
		path: "dist/assets",
		filename: "bundle.js",
		sourceMapFilename: 'bundle.map'
	},
	module: {
		rules: [
			{
				test: /\.js$|jsx/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'stage-0', 'react']
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
}
