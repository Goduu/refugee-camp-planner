module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    semi: 0,
    'space-before-function-paren': 0,
    quotes: 0,
    indent: 0,
    'no-console': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
};
