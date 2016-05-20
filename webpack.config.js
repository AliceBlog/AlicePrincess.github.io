var webpack = require("webpack");

module.exports = {
  entry: {
    "vendor": "./app/vendor",
    "app": "./app/boot"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      },{
      test: /\.css$/,
      loaders: ['style', 'css','postcss']
    },{
      test: /\.scss$/,
      loaders: ['style', 'css', 'postcss','sass']
    },{
      test: /\.(ttf|eot|woff(2)?)(\?(t=)?[a-z0-9]+)?$/,
      loader: 'file-loader'
    }, {
      test: /\.(svg?)(\?(t=)?[a-z0-9]+)$/,
      loader: 'file-loader'
    },{
			test: /\.svg$/,
			loader: 'svg-inline'
		},{
			test: /\.(jpe?g|png|gif)$/i,
			loaders: [
        'url?limit=4000000',
				'file?hash=sha512&digest=hex&name=[hash].[ext]',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			]
		}]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./dist/vendor.bundle.js")
  ]
}
