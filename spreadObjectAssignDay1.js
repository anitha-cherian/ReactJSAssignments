//define object1 with three properties.
const obj1 ={firstName:"Anitha",age:34,state:"Kerala"};
//define object2 with three properties.
const obj2={street:"Madiwala",city:"Bangalore",state:"Karnataka"};
//merges `object1` and `object2` using the spread operator
const combObj={...obj1,...obj2};
console.log(combObj);
 //add a new property county to the combined object
console.log({...combObj,country:"India"});
//below code are from classroomm handsown
//const combObj1={...obj1,...obj2,subAddr:{country:"India",pin:"670511"}};
/*const complex={city:"Hyd",state:"Andra",subAddr:{country:"India",pin:"560029"}};
console.log(complex);
const finalAdd={...person,...details,...complex};;
console.log(finalAdd);
complex.subAddr.country='USA';
console.log(finalAdd);*/