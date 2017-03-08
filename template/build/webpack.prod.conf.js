var path = require('path')
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var cssLoaders = require('./css-loaders')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanPlugin = require('clean-webpack-plugin')//webpack插件，用于清除目录文件
var glob = require('glob');

module.exports = merge(baseWebpackConfig, {
  //devtool: config.build.productionSourceMap ? '#source-map' : false,
  //文件的输出配置
  output: {
    path: config.build.assetsRoot,
    filename: path.join(config.build.assetsSubDirectory, 'js/[name].[hash:7].js'),
    chunkFilename: path.join(config.build.assetsSubDirectory, '[id].js')
  },
  vue: {
    loaders: cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    // 压缩项目代码
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    //清空生成目录
    new CleanPlugin(['dist'],{
        "root": path.resolve(__dirname, './build'),
         verbose: true,
         dry: false
     }), 
    new webpack.optimize.OccurenceOrderPlugin()
  ]
})

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    //tmp = entry.split('/').splice(-3);
    //pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
    entries[basename] = entry;
  });
  console.log(entries);
  return entries;
}

var pages = getEntry('./src/module/**/*.html');

for (var pathname in pages) {
  // 配置生成的html文件，定义路径等
  var conf = {
    filename: pathname + '.html',
    template: pages[pathname],   // 模板路径
    inject: true              // js插入位置
  };

  if (pathname in module.exports.entry) {
    conf.chunks = ['vendors', pathname];
    conf.hash = false;
  }
  
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
if(process.env.NODE_ENV === "production"){
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
  }));
}

















