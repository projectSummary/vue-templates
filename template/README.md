### 安装install

 ```npm install```

### 调试环境
 ```npm run dev```

### 生产环境
*  `npm run build`  未压缩代码，上158
*  `npm run release` 压缩上线代码
  
### 技术栈
vue@2.x, webpack@1.x, axios, mint-ui@2.x, babel, eslint, sass, express ,mockjs

### version
1.3.3

## 公告
### vue组件编码规范
* 每一个Vue组件（等同于模块）必须首先专注于解决一个单一的问题

### 数据请求

使用的是[axios](https://github.com/mzabriskie/axios)

### 例子,封装axios
```javascript
import ajax from 'ajax';
ajax.getData('http://api.smzdm.com/ev1/finder_detail/',$data => {
    console.log('data:', $data);
});

ajax.postData('http://api.smzdm.com/ev1/finder_detail/',{
  fid:12
},$data => {
    console.log('data:', $data);
});
```
### mock 模拟数据使用指南

* ```import Mock from 'mock_data';```
* ```import ajax from 'ajax';```
* 核心在assets/utils/api这个文件夹里面
* 配置URL 在urls.js
* 配置数据，一个页面一个JS，比如mock.detail.js,detail.html页面的数据在这
* 最后配置一下mock/index.js就可以了
* PS：可以参照一下detail页面这个，demo已经写在里面了

### 避免 this.$parent
Vue.js 支持组件嵌套，并且子组件可访问父组件的上下文。访问组件之外的上下文违反了基于模块开发的第一原则。因此你应该尽量避免使用 this.$parent。
* 通过 props 将值传递给子组件
* 通过 props 传递回调函数给子组件来达到调用父组件方法的目的
* 通过在子组件触发事件来通知父组件

### 谨慎使用 this.$refs
Props向下传递，事件向上传递！

### 提供组件 API 文档
在模块目录中添加 README.md 文件

### 坚持ES6 的标准
使用import取代require

### Vue组件命名
* 有意义
* 简短
* 具有可读性

### 组件表达式简单化
如果你发现写了太多复杂并难以阅读的行内表达式，那么可以使用 method 或是 computed 属性来替代其功能。

### 组件 props 原子化
* 尽量只使用JavaScript 原始类型(字符串、数字、布尔值) 和 函数。尽量避免复杂的对象。
* 传递过于复杂的对象使得我们不能够清楚的知道哪些属性或方法被自定义组件使用，这使得代码难以重构和维护
* 验证组件的 props

### 将 this 赋值给 component 变量
换句话说，不要在编写这样的代码 const self = this; ，而是应该直接使用变量 component。


### 组件结构化
```javascript
<template lang="html">
    <div class="Ranger__Wrapper">       <!-- ... -->
    </div>
</template>
<script type="text/javascript">  
  export default {      
    // 不要忘记了 name 属性    name: 'RangeSlider',    
    // 组合其它组件    
    extends: {},    
    // 组件属性、变量    
    props: {            
    bar: {}, // 按字母顺序           
    foo: {},            
    fooBar: {},     
    },    
    // 变量    
    data() {},    
    computed: {},    
    // 使用其它组件    
    components: {},    
    // 方法    
    watch: {},    
    methods: {},    
    // 生命周期函数    
    beforeCreate() {},    
    mounted() {},
};
</script>
<style scoped>  .Ranger__Wrapper { /* ... */ }</style>
```


