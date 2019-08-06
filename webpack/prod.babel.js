import path from 'path'

import webpack from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'
import merge from 'webpack-merge'

import { common } from './common'
import { clientEntries } from './entries'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
})

// eslint-disable-next-line no-console
const env = dotenv ? dotenv.parsed : console.log('ENV IS EMTPY!')

const prodConfig = merge(common, {
  name: 'client',
  mode: 'production',
  target: 'web',
  devtool: '',
  entry: clientEntries,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {},
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
    new ManifestPlugin({ basePath: '/' }),
    new HtmlWebpackPlugin({
      hash: false,
      inject: false,
      template: './webpack/templates/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        IS_SSR: JSON.stringify(process.env.IS_SSR),
        IS_CLIENT: 1
      }
    })
  ]
})

module.exports = prodConfig
