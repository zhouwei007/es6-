/*
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,ms,'异步完成');
    })
}
timeout(1000).then((value=>{
    console.log(value)
}))*/
const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject ('p1Result')
    },3000)
})
const  p2 = new Promise((resovle,reject) =>{
    setTimeout(() =>{
        resovle(p1)
    },1000)
});
p2.then(res =>{
    console.log(333333)
   console.log(res)
}).catch(error => {
    console.log(4444)
   //console.log(error)
});