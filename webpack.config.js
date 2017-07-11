var config = {
   entry: './app.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   watch: true,
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;