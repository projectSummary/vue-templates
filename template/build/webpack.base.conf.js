var path = require('path');
var config = require('../config');
var cssLoaders = require('./css-loaders');
var projectRoot = path.resolve(__dirname, '../');
var webpack = require('webpack');
var glob = require('glob');
var entries = getEntry('./src/module/**/*.js'); // 获得入口js文件
var chunks = Object.keys(entries);

// 将样式提取到单独的css文件中，而不是打包到js文件或使用style标签插入在head标签中
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: 'js/[name].[hash:7].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      //$ 表示精准匹配
      'vue$':'vue/dist/vue.common.js'
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test   : /\.css$/,
        loader : ExtractTextPlugin.extract("style", "css")
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?sourceMap'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      //字体
      {
        test: /\.((ttf|eot|woff|svg)(\?t=[0-9]\.[0-9]\.[0-9]))|(ttf|eot|woff|svg)\??.*$/,
        loader: 'url?limit=10000&name=fonts/[name].[ext]'
      },
      {
          test: /\.(png|jpe?g|gif)(\?.*)?$/,
          loader: 'url',
          query: {
            limit: 10000,
            name: path.join(config.build.assetsSubDirectory, 'img/[name].[ext]')
          }
      },
      {
        test: /vux.src.*?js$/,
        loader: 'babel'
      }
    ]
  },
  vue: {
    loaders: cssLoaders()
  },
  plugins: [
    // 提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors', // 公共模块的名称
      chunks: chunks,  // chunks是需要提取的模块
      minChunks: chunks.length
    }),
    // 配置提取出的样式文件
    new ExtractTextPlugin('static/css/[name].[hash:7].css')
  ]
}

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;
  //node的glob模块允许你使用 *等符号, 来写一个glob规则,像在shell里一样,获取匹配对应规则的文件
  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    // tmp = entry.split('/').splice(-3);
    // pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
    entries[basename] = entry;
  });

  return entries;
}
