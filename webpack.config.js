var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src/client/index.js'),
  output: {
    path: path.join(__dirname, 'src/server/public/javascripts/'),
    publicPath: '/javascripts/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: { presets: ['es2015'] }
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devtool: 'eval-source-map',
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
