"use strict"
//const 声明常量和let声明变量用法类似，const保证变量指向的内存地址不得改动，对于引用类型的声明，内存地址存的指针不变，但不能保证其指向的数据结构不变，
// 如要保持不变需冻结对象
/*const foo = {a:2};*/
const foo = Object.freeze({});
const b = foo;
b.a = 111;
console.log(foo);
console.log(b,foo === b);