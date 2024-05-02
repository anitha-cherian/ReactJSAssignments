//importing add function from mathOperations.js
import { add } from "./mathOperations";
//importing multiply function from mathOperations.js
import { multiply } from "./mathOperations";
//importing default function square from mathOperations.js
import square from "./mathOperations";
//calling function sum  in mathOperations.js
var sum=add(10,5);
console.log("sum="+sum);
//calling function  multiply in mathOperations.js
var product=multiply(4,3);
console.log("Product="+product);
//calling function  square in mathOperations.js
var sqr=square(9);
console.log("Square="+sqr);
