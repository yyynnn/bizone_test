const pkg = require('../package.json')

module.exports = Object.assign({}, pkg.jest, {
  setupFilesAfterEnv: ['<rootDir>/jest/jest.globals.js'],
  testRegex: '.*.test.dist.(ts|tsx|js)',
  rootDir: '../'
})
