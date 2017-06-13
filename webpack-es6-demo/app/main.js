import Person from "./Person.js";
import Proxy from "./Proxy.js";

let p = new Person("张三", 20);
document.write(p.say());


Proxy.count = 2;
Proxy.aaa = 1111;

/**
 * 数字的操作
 */

// let binary = 0b111110111 === 503;
let binary = Number("0b111");
let a = Array();
let isFinity = Number.isFinity(a);







// console.log(typeof a);










// 字符串的测试
/*
let s = "日";
var length = s.length;

console.log(length);

var charAt = s.charAt(0);

console.log(charAt);

let charCodeAt = s.charCodeAt(0)

console.log(charCodeAt);

console.log('------');

import Str from './Str.js';

let mystr = new Str('hello');

mystr.toArray();
var first =  mystr.first();

console.log(first);

var last = mystr.last();

console.log(last);

let searchStr = mystr.search('12312');

console.log(searchStr);

let reg = /^.$/u.test('中');

console.log(reg);

*/
