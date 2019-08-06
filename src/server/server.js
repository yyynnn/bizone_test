import { wdmStart } from './middlewares/wdm'
import { routes } from './middlewares/router'

const port = process.env.PORT || 3000

const runServer = () => {
  const express = require('express')
  const app = express()

  if (process.env.NODE_ENV === 'development') {
    wdmStart(app) // routes are inside to work with server hot reload
  } else {
    routes(app)
  }

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Hey, ${process.env.USERNAME || 'baby'}! The ${
        process.env.NODE_ENV
      } server is running on http://localhost:${port}`
    )
  })
}

module.exports = runServer
