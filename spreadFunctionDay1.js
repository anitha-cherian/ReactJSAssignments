//function  that takes three arguments and returns their sum.
function sum(x,y,z){
    return x+y+z;
}
var args=[10,20,30];
//call the function sumand store the output in var result
let result=sum(...args);
console.log("sum:"+result);