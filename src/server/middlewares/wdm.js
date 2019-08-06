import { routes } from '../middlewares/router'

export const wdmStart = app => {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  // const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
  const devConfig = require('webpack/dev')
  const serverConfig = require('webpack/server.babel')

  const compiler = webpack([devConfig, serverConfig])
  const clientCompiler = compiler.compilers.find(c => c.name === 'client')
  const options = {
    publicPath: devConfig.output.publicPath,
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    inline: true,
    stats: { colors: true },
    serverSideRender: true
  }

  // Order is important
  app.use(webpackDevMiddleware(compiler, options))
  app.use(webpackHotMiddleware(clientCompiler))
  routes(app)
  // app.use(webpackHotServerMiddleware(compiler))
}
