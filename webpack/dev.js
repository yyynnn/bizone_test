import path from 'path'

import webpack from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'
import WebpackBar from 'webpackbar'
import merge from 'webpack-merge'

import { clientEntries } from './entries'
import { common } from './common'

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
})

// eslint-disable-next-line no-console
const env = dotenv ? dotenv.parsed : console.log('ENV IS EMTPY!')

const devConfig = merge(common, {
  name: 'client',
  devtool: 'cheap-module-source-map',
  target: 'web',
  mode: 'development',
  entry: clientEntries,
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
    new WebpackBar(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin({ basePath: '/' }),
    new webpack.DefinePlugin({
      'process.env': {
        IS_SSR: JSON.stringify(process.env.IS_SSR),
        BASE_API: JSON.stringify(env.BASE_API),
        DEV_BASE_API: JSON.stringify(env.DEV_BASE_API),
        IS_CLIENT: 1
      }
    })
  ]
})

module.exports = devConfig
