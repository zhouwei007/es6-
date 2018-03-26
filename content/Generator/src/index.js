/*
function* myGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = myGenerator();
console.log(hw.next())

function* f() {
    console.log('执行了！')
}

var generator = f();

setTimeout(function () {
    console.log(generator.next())

}, 2000);
*/
/*function foo(x,y) {
    console.log(1)
    console.log(x,y)
    console.log(2)
}
function *demo() {
    foo(yield 'a',yield 'b')
    let input = yield ;
}
let demoGenerator = demo();
console.log(demoGenerator.next('呵呵'));
console.log(demoGenerator.next('dd'));
console.log(demoGenerator.next());console.log(demoGenerator.next());*/
function* f() {
    for(var i = 0; true; i++) {
        var reset = yield i;
        if(reset) { i = -1; }
    }
}

var g = f();
console.log(g.next(),g.next(),g.next(true) )
 // { value: 0, done: false }
// { value: 1, done: false }
 // { value: 0, done: false }

