const envInit = () => require('dotenv').config()
const assetResolver = () => {
  require('asset-require-hook')({
    extensions: ['.png', '.jpg', '.jpeg', '.woff', '.woff2', '.ico', '.css', '.svg'],
    limit: 10000
  })
}

envInit()
assetResolver()

// ALL OF THIS IS ^ NEEDED TO BE LOADED BEFORE SERVER INIT

const runServer = require('./server')

runServer()

process.on('uncaughtException', err => {
  console.error(err)
  process.exit(1)
})

process.on('unhandledRejection', err => {
  console.error(err)
})
