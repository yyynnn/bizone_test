import path from 'path'

import { aliasConfig } from './aliases'

export const common = {
  context: process.cwd(), // project root
  devtool: 'cheap-module-eval-source-map',
  cache: true,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/bizone_test',
    filename: 'bundle.[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false
            }
          },
          'file-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        exclude: ['/node_modules/', '/src/client/assets/favicons/'],
        loader: 'url-loader',
        options: {
          limit: 20000
        }
      },
      {
        test: /\.(png|ico|ttf|woff|woff2)$/,
        exclude: ['/node_modules/', '/src/client/assets/img/'],
        loader: 'file-loader',
        options: {
          publicPath: '/bizone_test',
          name: '[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: aliasConfig.aliases,
    extensions: ['*', '.js', '.jsx']
  }
}
