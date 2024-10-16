const xyz = require('./index2')
// using imported elements from index2.js file
console.log(xyz)
console.log(xyz.x, xyz.y, xyz.z())


console.log(" Prog")
var a= 20, b=30, c=40;
// console.log(a,b,c);
// console.warn(a,b,c); //gives same result
// here console.log and console.warn are not same because log is a browser module or function where as warn is the own module or function of nodeJS.

