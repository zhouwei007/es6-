
"use strict"
/*
* a.块级作用域，let和const声明的变量只在其声明的代码块里生效,var声明的变量只在其函数作用域中或者是全局变量
* b.若let声明在循环条件中，则声明的变量只在循环体中有效,var声明的循环条件会在其所在的函数作用域作为局部变量或者在全局中作为全局变量
* c.不存在变量提升，按着变量在声明语句后才使用的原则
* d.在代码块内使用let命令声明变量之前，该变量都不可用，称之为暂时性死区，这样设计的目的主要是要大家养成良好的编程习惯
* e.不允许在相同的作用域重复声明*/
/*{
    let a = 1;
    var b = 2;
}
console.log(b);
console.log(a);*/

//b
/*for (let i = 0;i < 5 ;i++) {

}
console.log(i);
var arr = [];
for (var i = 0;i < 5;i++) {
    arr[i] =  function () {
        console.log(i);
    }
}
arr[3]();*/
/*var arr = [];
for (var i = 0;i < 5;i++) {
    (function () {
        var j = i;
        arr[i] =  function () {
            console.log(j);
        }
    })()
}
arr[3]();*/
/*var arr = [];
for (let i = 0;i < 5;i++) {
    arr[i] =  function () {
        console.log(i);
    }
}
arr[3]();*/

// for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域(使用let声明)
// 这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。

/*
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
*/


/*var arr = [];
for (let i = 0;i < 5;i++) {
    arr[i] =  function () {
        console.log(i);
    }
}
arr[3]();*/

//不存在变量提升
/*console.log(foo);
var foo = 1;
let foo = 1;*/
//暂时性死区
/*if (true) {
   a = 'heheda';
   let a;
}*/
/*注意typeof的使用，如果判断的变量是let声明的就可能不是100%的安全*/
/*typeof x;
let x;*/
/*console.log(typeof dfdf)*/
//比较隐藏的暂时性死区
/*function bar (x = y, y = 2) {//函数默认用let声明
    return [x,y]
}
bar()*/
//e 不允许在相同作用域内，重复声明同一个变量。
/*
function func() {
    let a = 10;
    let a = 1;
}*/
