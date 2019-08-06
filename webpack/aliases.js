import path from 'path'

const srcPath = p => path.resolve(__dirname, '..', 'src/', p)

const aliases = {
  api: srcPath('client/api'),
  assets: srcPath('client/assets'),
  client: srcPath('client/'),
  constants: srcPath('client/constants'),
  features: srcPath('client/features'),
  fonts: srcPath('client/assets/fonts'),
  hooks: srcPath('client/hooks'),
  'react-dom': '@hot-loader/react-dom',
  'styled-components': path.resolve(__dirname, '../node_modules', 'styled-components')
}

const setAlias = config => {
  config.resolve.alias = { ...config.resolve.alias, ...aliases }
  return config
}

export const aliasConfig = { setAlias, aliases }
