import asyncHandler from 'express-async-handler'
import uniqid from 'uniqid'

import { renderHTML } from '../templates/renderHTML'
import { render500 } from '../templates/render500'

const IS_PROD = process.env.NODE_ENV === 'production'
const baseApiUri = IS_PROD ? process.env.BASE_API : process.env.DEV_BASE_API
const buildId = `webpack_build_${uniqid()}`

export const renderer = asyncHandler(async (req, res) => {
  try {
    res.status(200).send(renderHTML({ baseApiUri, buildId }))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error', error)
    res.status(500).send(render500({ error, buildId }))
  }
})
