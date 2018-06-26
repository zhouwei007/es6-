'use strict';
//es5
/*function Point(x,y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function () {
    return `（${this.x},${this.y})`;
};
var p = new Point(1,3);
console.log(p.toString());*/
//es6
class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return `（${this.x},${this.y})`;
    }
}
var p1 = new Point(2,3);
console.log(p1.toString());