//function that can accept any number of inputs 
function sumAll(...num){
    var sum=0;
    //traverse through the numbers in the array and add the numbers to find the sum
   for (let i=0;i<num.length;i++){

   // console.log(num[i]);
     sum +=num[i];
     
   }
  
   console.log("sum:"+sum) ;
    
}
//calling function with 4 parameters
sumAll(10,20,30,40);
//calling function with 3 parameters
sumAll(100,200,300);