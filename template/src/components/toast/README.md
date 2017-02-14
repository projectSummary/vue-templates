## Toast
简短的消息提示框，支持自定义位置、持续时间和样式。
###
引入
```javascript
import { Toast } from 'components';
```
###例子
基本用法
```javascript
Toast('提示信息');
```
在调用 Toast 时传入一个对象即可配置更多选项
```javascript
Toast({
  message: '提示',
  position: 'bottom',
  duration: 5000
});
```