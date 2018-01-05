/*
# es6一共有6中声明变量的方式：
* var命令 function命令 let命令 const命令 import命令 class命令
# 顶层对象 浏览器中是Window node环境中是global
+ 由于es5中全局变量与顶层对象属性是等价的，导致被认为javascrpt最大的设计败笔主要带来以下几个问题
- 无法在编译的时候就提示变量未声明的错误，只有运行的时候才能知道（因为全局变量可能是顶层对象属性动态创建出来的）
  - 程序员可能打错字创建全局变量
  - window对象有实体含义，指的是浏览器窗口对象。
* es6改进 let const import global 创建的全局变量不是顶层对象属性
let b = 1;
window.b //undefined 实际上报错 Identifier 'b' has already been declared *


*/
var b = 1;
console.log(global.b)