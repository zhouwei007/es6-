"use strict";
/*
function makeIterator(array) {
    let nextIndex = 0;
    return {
        next:function () {
            return nextIndex < array.length ?
                {value:array[nextIndex++],done:false}:
                {value:undefined,done:true}
        }
    }
}
let it  = makeIterator(['a','b','c']);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/
var str = 'heheda';
console.log(typeof str[Symbol.iterator]())
var iterator = str[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());console.log(iterator.next());

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
