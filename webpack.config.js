const webpack = require('webpack')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const shouldAnalyze = process.argv.includes('--analyze')
const nodeEnv = process.env.NODE_ENV || 'development'

const plugins = []
shouldAnalyze && plugins.push(new BundleAnalyzerPlugin())

console.log(plugins)
const config = {
  mode: nodeEnv,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: '.',
  },
  plugins,
}

module.exports = config
