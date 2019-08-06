import path from 'path'

import nodeExternals from 'webpack-node-externals'
import merge from 'webpack-merge'

import { common } from './common'
import { serverEntry } from './entries'

const serverConfig = merge(common, {
  name: 'server',
  entry: serverEntry,
  target: 'node',
  cache: false,
  externals: [nodeExternals()],
  devtool: 'hidden-source-map',
  output: {
    path: path.resolve(__dirname, '../build/'),
    publicPath: '/',
    filename: 'bundle.[name].js',
    libraryTarget: 'commonjs2'
  },
  node: {
    __dirname: true
  }
})

module.exports = serverConfig
