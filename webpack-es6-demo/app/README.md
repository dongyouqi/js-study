# es6

## 数字

### 二进制和八进制表示法

> ES6 提供了二进和八进制的新的写法，分别用 0b(或0B)表示。
> ES5 的严格模式中八进制不允许使用0表示，ES6 中明确表示要使用

* 二进制 0b(0B) binary
* 八进制 0o(0O) octal

```
0b111110111 === 503 

```

当然二进制和八进制的数据可以直接转化为十进制

```
var binary = Number('0b111'); 
console.log(binary); => 7
```

ES6 在 Number 的对象上，新提供了 Number.isFinite() 和 Number.isNaN()

* Number.isFinite() 是用来检查一个值是否有限
* Number.isNaN() 判断一个数值是否是一个NaN
* Number.parseInt() 
* Number.parseFloat()

```
经过控制台的测试
console.log(isFinite(25));console.log(isFinite('25'));
=> true true

console.log(Number.isFinite(25));console.log(Number.isFinite('25'));
=> true false

console.log(Number.isInteger('25'));
=> false

```







