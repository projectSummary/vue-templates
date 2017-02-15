##Message box
弹出式提示框，有多种交互形式。

###引入
```javascript
import { MessageBox } from 'components';
```

###例子
以标题与内容字符串为参数进行调用
```javascript
MessageBox('提示', '操作成功');
```


或者传入一个对象
```javascript
MessageBox({
  title: '提示',
  message: '确定执行此操作?',
  showCancelButton: true
});
```
此外，MessageBox 还提供了 alert、confirm 和 prompt 三个方法，它们都返回一个 Promise
```javascript
MessageBox.alert(message, title);
```
```javascript
MessageBox.alert('操作成功').then(action => {
  ...
});
```
```javascript
MessageBox.confirm(message, title);
MessageBox.confirm('确定执行此操作?').then(action => {
  ...
});
MessageBox.prompt('请输入姓名').then(({ value, action }) => {
  ...
});
```
