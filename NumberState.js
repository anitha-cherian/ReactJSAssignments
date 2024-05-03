import { useState } from "react";
import React from "react";
 
function NumberState() {
    let [num, setNumber] = useState(0);//initializing num state to 0
   
    //function to increment number state by 1
function incrementNumber(){
    //count++;
    setNumber(num+1);
    console.log(num);

   }
    //function to decrement number state by 1
function decrementNumber(){
       setNumber(num-1);
    console.log(num);

   }
   //function to reset number state to 0
   function resetNumber(){
  
    setNumber(num=0);
    console.log(num);

   }


   return (
    <div >
      <h1>{num}</h1>
      
      {/*button to Increment Number*/}
      <button onClick={incrementNumber} >Increament </button>
       {/*button to Decrement Number*/}
      <button onClick={decrementNumber} >Decrement </button>
        {/*button to reset Number*/}
        <button onClick={resetNumber} >Reset </button>
    </div>

 );
}
export default NumberState;
