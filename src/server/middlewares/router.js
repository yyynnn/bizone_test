import path from 'path'

import express from 'express'
import compression from 'compression'
import proxy from 'http-proxy-middleware'

import { renderer } from '../helpers/renderer'

const IS_PROD = process.env.NODE_ENV === 'production'

const onProxyReq = (_, __, res) => {
  res.setHeader('Connection', 'keep-alive')
}

export const routes = app => {
  IS_PROD && app.use(compression())
  app.use(express.static(path.resolve(__dirname, '../../../build')))
  app.use(
    '/api',
    proxy({
      target: `${IS_PROD ? process.env.BASE_API : process.env.DEV_BASE_API}`,
      changeOrigin: true,
      secure: false,
      onProxyReq
    })
  )
  app.get(/^[^.]+$/, renderer, app)
}
