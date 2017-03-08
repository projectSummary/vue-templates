# vue && webpack
# 安装install
 `npm install`
# 调试环境
 `npm run dev`
# 生产环境
 `npm run build`
## version
1.2.1
## 公告
* detail.html 和 list.html 不再使用
* 新建test.html
*

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
### 1.0与2.0的一些区别
与1.0的不同
v-else-if：在2.0中新增了v-else-if，类似于js中的else if，不能单独使用，需跟在v-if之后；
v-for：在使用v-for遍历对象的时候，当存在index时，1.0的参数顺序是(index, value)，2.0变成了(value, index)；
v-for：1.0中，v-for块内有一个隐性的特殊变量$index可以获取当前数组的索引，在2.0中移除了，改为了以上这种显式的定义方式；
key：key替代track-by

### 坚持ES6 的标准
使用import取代require





