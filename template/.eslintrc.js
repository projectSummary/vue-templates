module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
   env:{
    "browser": true,
    "node": true,
    "es6": true
  },
  // required to lint *.vue files
  // extends: 'vue',
  plugins: [
  // 'vuefix',
    'html'
  ]
}