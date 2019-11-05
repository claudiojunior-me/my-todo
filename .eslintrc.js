module.exports ={
  extends: [
    'plugin:react/recommended',
    '@softboxlab/eslint-config-gandalf-lint-react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    jest: true
  }
}
