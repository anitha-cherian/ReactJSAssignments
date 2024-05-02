//define array1
let arr1=[1,2,3];
//define array2
let arr2=[5,6,7]
console.log(arr1);
console.log(arr2);
//merge arr1 and arr2 to arr3 using spread operator
let arr3=[...arr1,...arr2];
console.log(arr3);
//merge the arrays array1 and array2 by adding elements to the begining , middle and end of arrays
let arr4=[0,...arr1,4,...arr2,8];
//add  elements to the begining  and end of meged array array3 
let arr5=[0,...arr3,4];
console.log(arr5);
