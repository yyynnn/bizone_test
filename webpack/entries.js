import path from 'path'

import { polyfills } from 'config/polyfills'

const env = process.env.NODE_ENV
const IS_WDS = process.env.IS_WDS

const srcPath = p => path.resolve(__dirname, '..', 'src/', p)

const addPolyfillsToEntries = (innerEntries, innerPolyfills, envInner) => {
  const result = {}
  for (const entry in innerEntries) {
    if (innerEntries.hasOwnProperty(entry)) {
      result[entry] = innerPolyfills[envInner].concat(innerEntries[entry])
    }
  }
  return result
}

export const clientEntries = addPolyfillsToEntries(
  {
    app: srcPath('index.js')
  },
  polyfills,
  IS_WDS ? 'devWDS' : env === 'development' ? 'dev' : 'prod'
)

export const serverEntry = addPolyfillsToEntries(
  {
    server: srcPath('server/index.js')
  },
  polyfills,
  'server'
)
