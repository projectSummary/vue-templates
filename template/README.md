# vue && webpack

## environment

 `bash or iterm2`

# 安装install

 `npm install`

# 调试环境

 `npm run dev`

# 生产环境

 `npm run build`

## version

1.2.0

## components
组件暂时是有三种

### JS Components
* message-box
* toast
* actionsheet
* indicator
* spinner

### CSS Components
* header
* button


### Form Components

### CSS 命名空间
cs 作为前缀

### 坑
* 一个模版下面只能放置一个根节点
* ready() 改为 mounted()


### 数据请求

使用的是[axios](https://github.com/mzabriskie/axios)

####例子
```javascript
import axios from 'axios';
axios.get('http://api.smzdm.com/ev1/finder_detail/',{
                    params: {
                        fid: 11
                    }
                }).then((response) => {
                    var $data = response.data;
                });
```

