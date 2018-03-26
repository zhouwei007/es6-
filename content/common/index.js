/*
* 1，解构赋值应用场景
* */
/*取对象的值的时候*/
let obj = {
    name:'zhouwei',
    sex:'man',
    class:'二班',
    grade:'三年级'
};
let {name,sex,grade} = obj;
console.log(`name:${name}`,`sex:${sex}`,`grade:${grade}`);
/*取值数组的时候*/
let array = ['red','green','yellow','blue'];
let [firstColor,secondColor,...hehe] = array;
console.log(`firstColor:${firstColor}`,`sencodColor:${secondColor}`,`hehe:${hehe}`);
/*变量交换*/
let a = 1,b = 2;
[a,b] = [b,a];
console.log(`a:${a}`,`b:${b}`);
/*默认值*/
let myObj = {
    name:'heheda'
}
let {myName,mySex = 'woman'} = myObj;
console.log(`myName:${myName}`,`mySex:${mySex}`);
/*嵌套数组解构*/
/*
let obj1 = {
    name:'caocao',
    shuxing:{
        sex:'man',
        age:'12'
    }
};
*/
let colors1 = ["red",["green","lightGreen","bule"],"yellow"];
let [color1,[color2]] = colors1;
console.log(`color1:${color1}`,`color2:${color2}`)
/*不定元素*/
let colors2 = ['red','green','yellow','bule'];
let [color3,...color4] = colors2;
console.log(`color4:${color4}`);
/*数组复制*/
let [...cloneColors2] = colors2;
console.log(`cloneColors2:${cloneColors2}`);
/*解构参数*/
function setCookie(name,vaule,{secure,path} = {secure:false,path:'moren'}) {
    console.log(name,vaule,path)
}
setCookie('zhouwei','123')
setCookie('zhouwei','123',{secure:true,path:'/heheda/dd'});

/************2对象的扩展******************/
let id = '123';
let obj2 = {id};
console.log('obj2',obj2);
/****************3箭头函数*******************
 * 箭头函数没用自己的this，用的都是寄主的this
 * */
/************4promise*****************/
let myPromise = ()=> {
   return new Promise(resolve=>{
       setTimeout(()=>{resolve('heheda')},1000)
   })

};
myPromise().then(resolve => {
    console.log('resolve',resolve)
});
/*************5字符串模板***************/
let str = 'xixida';
console.log(`我是字符串模板:${str}`)
/***************************/


/*******map方法的使用array****
 * map不会对空数组进行检测
 * map不会改变原始数组
 * currentV当前元素值【必填】，index可选当前元素的索引【可选】，arr【当前元素属于的数组对象】
 * */
let array2 = [{name:'zhouwei'},{name:'heheda'},{name:'xixida',age:12}];
let array3 = array2.map((currentV,index,arr)=>{
   return index + currentV.name
})
console.log(`array3;${array3}`);
/********reduce方法*****
 * callback中四个参数
 * accumulator 【必填】累加器 累加回调的返回值；它上次调用时返回的累积值，如果有initialValue，第一次调用accumulator取值initialValue，没有则取值数组中第一个值
 * currentValue 【必填】数组中正在处理的元素
 * currentIndex 【可选】数组中正在处理的当前元素索引。 如果提供了initialValue，则索引号为0，否则为索引为1。
 * array【可选】 调用reduce的数组
 * initialValue【可选】 用作第一个调用 callback的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
 * */
let array4 = [0,1,2,3,4];
let array5 = array4.reduce((accumulator,currentValue,currentIndex,array)=>{
    return accumulator + currentValue;
},5);
console.log(`array5:${array5}`);
/*****计算数组中每个元素出现的次数*****/
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let countedNames = names.reduce((allNames,name)=>{
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
},{});
console.log(`countedNames:${countedNames.Alice}`)
/*******利用reduce进行数组去重*********/
let nums = [1,2,1,2,3,5,4,5,3,4,4,4,4];
let result = nums.sort().reduce((init,current)=>{
    if (init.length === 0 || init[init.length - 1]!== current){
        init.push(current);
    }
    return init;
},[]);
/*****find 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
 *arr.find(callback[, thisArg])
 * callback三个参数
 * element当前遍历的元素
 * index当前遍历到的索引
 * array数组本身
 * thisArg
 * ******/
let ret1 = [12,5,8,50,44,130].find((ele,index,array)=>{
    return ele >= 15;
});
console.log('find用法',typeof ret1,ret1)
/********filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
 *
 * *********/
let filtered = [12,5,8,50,44,130].filter((ele,index,array)=>{
    return ele >= 15;
});
console.log('filter',typeof filtered,filtered);

/****************Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
 * target 目标对象
 * sources 源对象
 * 1，复制对象
 * 2，深度拷贝
 * 3，合并对象
 * */
function copy() {
    let obj = {a:1};
    let copy = Object.assign({},obj);
    console.log('copy',copy)
}
copy();
function test() {
    'use strict';

    let obj1 = { a: 0 , b: { c: 0}};
    let obj2 = Object.assign({}, obj1);
    console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

    obj1.a = 1;
    console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
    console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

    obj2.a = 2;
    console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
    console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}

    obj2.b.c = 3;
    console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
    console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}

    // Deep Clone
    obj1 = { a: 0 , b: { c: 0}};
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
}
test();

function merge() {
    let o1 = {a:1};
    let o2 = {b:2};
    let o3 = {c:3};
    let obj = Object.assign(o1,o2,o3)
    console.log(obj); // { a: 1, b: 2, c: 3 }
    console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
}
merge();
/**************Object.keys
 *Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用
 * for...in 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。
 * ****************/
function myObjectkey() {
    let obj = {
        name:'zhouwei',
        age:'29'
    }
    console.log('ObjectKey',Object.keys(obj))
}
myObjectkey();
