const path = require('path');

module.exports = {
	entry: './static/js/src/index.js',
	output: {
		path: path.resolve(__dirname, 'static/js/built'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'static'),
		publicPath: '/js/built'
	}
};
