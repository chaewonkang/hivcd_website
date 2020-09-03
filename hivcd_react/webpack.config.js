module.export = {
	entry: "./src/index.js",
	output: {
		path: "dist/assets",
		filename: "bundle.js",
		sourceMapFilename: "bundle.map"
	},
	devtool: "#source-map", // made webpack use source mapping
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'stage-0', 'react']
				}
			}
		]
	}
}
