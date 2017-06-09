import Person from './Person.js';
import Proxy from './Proxy.js';

let p = new Person('张三', 20);
document.write(p.say());

Proxy.count = 2;
Proxy.aaa = 1111;





