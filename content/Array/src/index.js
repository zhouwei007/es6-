
function add(x,y,z) {
    console.log(x+y+z)
}
const numbers = [1,4,5];
add(...numbers);
let list = [1,2,3,5];
[a,...rest] = list;
console.log(...rest);
list = ['a','b','c']
list.map((v,i,ele) => {
    console.log(v,i,ele)
})