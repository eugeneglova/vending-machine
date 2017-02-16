const path = require('path');

module.exports = {
	entry: './static/js/src/index.js',
	output: {
		path: path.resolve(__dirname, 'static'),
		filename: 'js/built/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						query: {
							presets: [
								'es2015',
								'stage-2',
								'react'
							]
						}
					}
				]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'static')
	}
};
