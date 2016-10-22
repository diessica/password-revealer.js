var webpack = require('webpack')
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var path = require('path')
var libraryName = 'PasswordRevealer'

var config = {
  entry: __dirname + '/src/index.js',
  // devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'password-revealer.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    preLoaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: [
    new UglifyJsPlugin({ minimize: true })
  ]
}

module.exports = config
