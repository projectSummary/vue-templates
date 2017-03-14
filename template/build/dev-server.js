var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../config');
var proxyMiddleware = require('http-proxy-middleware');

var webpackConfig = require('./webpack.dev.conf');

var port = process.env.PORT || config.dev.port;
var proxyTable = config.dev.proxyTable;
//express 启动一个服务
var app = express();
// 启动webpack进行编译
var compiler = webpack(webpackConfig);
//启动 webpack-dev-middleware 将编译后的文件暂存到内存中 
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});
//启动 webpack-hot-middleware
var hotMiddleware = require('webpack-hot-middleware')(compiler,{
  log: () => {}
})

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
});

// 将 proxyTable 中的请求配置挂在到启动的 express 服务上
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
});

// 使用 connect-history-api-fallback 匹配资源，如果不匹配就可以重定向到指定地址
app.use(require('connect-history-api-fallback')())

// 将暂存到内存中的 webpack 编译后的文件挂在到 express 服务上
app.use(devMiddleware);

// 将 Hot-reload 挂在到 express 服务上
app.use(hotMiddleware);

// 为静态资源提供响应服务
var staticPath = path.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
