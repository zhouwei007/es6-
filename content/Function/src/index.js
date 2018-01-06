/*函数默认值*/
/*es5默认值*/
/*
function log(x, y) {
    y = y || 'World';
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World
*/
/*es6函数默认值*/
/*function log(x, y = 'World') {
    console.log(x, y);
}
log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello*/

/*参数变量是默认声明的不能再次用let和const声明*/
/*function foo(x = 5) {
    let x = 1; // error
    //const x = 2; // error
}*/
/*解构赋值默认值结合使用*/
/*let {x,y} = {x:111,y:222}
function foo({x, y = 5}) {
    console.log(x, y);
}

foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined*/

//通过提供函数参数的默认值，就可以避免这种情况。
/*
function foo({x = 4, y = 5} = {}) {
    console.log(x, y);
}

foo() // undefined 5*/

//多重默认
/*
function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
    console.log(method);
}

fetch('http://example.com')
*/
/*
// 写法一 函数参数的默认值是空对象，但是设置了对象解构赋值的默认值
function m1({x = 0, y = 0} = {}) {
    return [x, y];
}

// 写法二 函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值
function m2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}*/
/*

// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x 和 y 都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x 有值，y 无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x 和 y 都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]*/


//参数默认值的位置 这时，无法只省略该参数，而不省略它后面的参数，除非显式输入undefined。
/*
function f(x = 1, y) {
    return [x, y];
}

f() // [1, undefined]
f(2) // [2, undefined])
/!*f(, 1) // 报错*!/
f(undefined, 1) // [1, 1]
*/


//函数的 length 属性 设置n个默认参数值 其length减少n个
/*(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2*/


//作用域 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）
//在不设置参数默认值时，是不会出现的。
/*var x = {a:1};

function f(y = x) {
    let x = y;
    x.a = 2;
    // let x = {b:2};
    console.log(y.a, 1);
}

f() // 1
console.log(x.a,2);*/

/*
function m(y) {
    let x = 2;
    console.log(y);
}

m()
*/

/*
var x = 1;

function f(x, y = x) {
    console.log(y);
}

f(2) // 2
*/

//2rest参数 （形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了
//arguments是类数组对象，rest参数是真正的数组，像sort()这些数组的方法rest参数可以直接调用
/*function add(...values) {
    console.log(values)
}

add(2, 5, 3) // 10*/

//name 属性


/*
var f = function () {};

// ES5
f.name // ""

// ES6
f.name // "f"*/

//箭头函数
/*
* 简化常规函数写法*/
/*var f = v => v;*/

//箭头函数没用this\arguments，使用的宿主（外层函数）的this和arguments对象，arguments对象可以用rest参数替代
//没用this就没构造函数，所以箭头函数使用new关键字会报错 call()、apply()、bind()也无效
/*function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

var id = 21;

foo.call({ id: 42 });*/
/*function foo() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}*/
function foo() {
    setTimeout(() => {
        console.log('args:', arguments);
    }, 100);
}

foo(2, 4, 6, 8)

