module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
	    {
	      test: /\.js/,
	      loader: 'babel',
	      query: {
	        presets: ['react','es2015']
              }
	    }
        ]
    }
};
