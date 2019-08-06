module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      'babel-module': {
        paths: [
          'src',
          'src/client',
          'src/server',
          'src/client/api',
          'src/client/constants',
          'src/client/features'
        ],
        extensions: ['.js', '.jsx']
      },
      webpack: {
        config: {
          resolve: {
            modules: ['node_modules']
          }
        }
      }
    }
  },
  globals: {
    shallow: true,
    render: true,
    mount: true,
    API_HOST: true,
    describe: true,
    it: true,
    expect: true
  },
  extends: ['plugin:react-perf/recommended', 'eslint:recommended', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    }
  },
  plugins: [
    'react',
    'prettier',
    'import',
    'jsx-a11y',
    'fp',
    'react-perf',
    'react-hooks',
    '@typescript-eslint/tslint',
    'security'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto'
      }
    ],
    'no-unexpected-multiline': 'off',
    'import/first': ['error', { 'absolute-first': true }],
    'import/no-default-export': 1,
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/no-cycle': [2, { maxDepth: 1 }],
    'import/named': 1,
    'import/no-self-import': 2,
    'import/no-cycle': [2, { maxDepth: 1 }],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'fp/no-arguments': 0,
    'fp/no-mutating-methods': [
      0,
      {
        allowedObjects: ['_', 'R', 'fp', 'pathOr']
      }
    ],
    'react/jsx-no-bind': [
      2,
      {
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false
      }
    ],
    'fp/no-valueof-field': 'error',
    'react-perf/jsx-no-new-function-as-prop': 'off',
    'react-perf/jsx-no-new-array-as-prop': 'off',
    'react/no-deprecated': 2,
    'react/destructuring-assignment': 0,
    'react/no-will-update-set-state': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
    'react/jsx-pascal-case': 1,
    'react/prop-types': 0,
    indent: ['warn', 2, { SwitchCase: 1 }],
    'no-duplicate-imports': 'error',
    'no-undef': 'error',
    'no-undefined': 0,
    'no-unused-vars': 0,
    'no-param-reassign': 0,
    'no-const-assign': 'error',
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-alert': 'error',
    'no-template-curly-in-string': 'error',
    'max-len': [
      1,
      {
        code: 100,
        ignoreUrls: false,
        comments: 300,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'line-comment-position': [0, { position: 'beside' }]
  }
}
