var path = require('path')
module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: process.env.NODE_ENV === 'development' ? '/' : 'http://res.smzdm.com/',
    productionSourceMap: true
  },
  dev: {
    port: 8083,
    proxyTable: {}
  }
}
