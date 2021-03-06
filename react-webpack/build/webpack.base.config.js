const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Stylish = require('webpack-stylish')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      path.resolve(__dirname, '../src/main.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: ASSET_PATH,
    filename: '[name].js',
    chunkFilename: 'chunk/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.web.js', '.js', '.jsx', '.json']
  },
  mode: '',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React App',
      template: path.resolve(__dirname, '../src/index.html'),
      // minify: true,
      // inject: true,
      cache: true
    }),
    new Stylish(),
    new BundleAnalyzerPlugin()
  ]
}
