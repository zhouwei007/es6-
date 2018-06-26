let fs = require('fs');
let thunkify = require('thunkify');
let readFileThunk = thunkify(fs.readFile);
let co = require('co');
/*thunk函数自执行*/
/*let gen = function *() {
    let r1 = yield readFileThunk(__dirname+'/fs/1.txt');
    console.log(`r1:${r1.toString()}`);
    let r2 = yield readFileThunk(__dirname+'/fs/2.txt');
    console.log(`r2:${r2.toString()}`);
};
let g = gen();
let r1 = g.next();
r1.value(function (err,data) {
    if (err) throw  err;
    let r2 = g.next(data);
    r2.value(function (err,data) {
        if (err) throw err;
        g.next(data);
    })
});*/
/*co模块自执行免掉了generator的执行器*/
/*let gen = function *() {
    let r1 = yield readFileThunk(__dirname+'/fs/1.txt');
    console.log(`r1:${r1.toString()}`);
    let r2 = yield readFileThunk(__dirname+'/fs/2.txt');
    console.log(`r2:${r2.toString()}`);
};
let g = gen();
co(gen).then(()=>{
    console.log('generator 函数执行完成')
});*/
/*promise对象的自执行*/
/*let gen = function *() {
  let  f1 = yield readFile(__dirname+'/fs/1.txt') ;
    console.log(`f1:${f1.toString()}`);
    let  f2 = yield readFile(__dirname+'/fs/2.txt') ;
    console.log(`f2:${f2.toString()}`);

};
let readFile = (fileName)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if (err)return reject(err);
            resolve(data);
        })
    })
};
let g = gen();
g.next().value.then((data)=>{
    g.next(data).value.then((data) => {
        g.next(data);
    })
});*/

/*async 异步操作*/
let readFile = (fileName)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if (err)return reject(err);
            resolve(data);
        })
    })
};
let arr = [1,2];
let obj = {};
const asyncReadFile = async function () {
    const f1 = await readFile(__dirname+'/fs/1.txt') ;
    const f2 = await readFile(__dirname+'/fs/2.txt') ;
    for (let num of arr){
        obj[num] = await readFile(`${__dirname}/fs/${num}.txt`)
    }
    /*console.log(f1.toString());
    console.log(f1.toString());*/
    console.log(obj[1].toString());
    console.log(obj[2].toString());
};
asyncReadFile();
/*
function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    try {
        await timeout(ms);
    }
    catch (err){

    }

    console.log(11);
    console.log(value);
}
console.log(3333);
asyncPrint('hello world', 2000);*/


/*并发异步相互不依赖*/