//function to accept first name , last name and any number of hobbies.
function userInfo(firstName,lastName,...hobbies){
    console.log("Name: "+firstName+" "+lastName);
       console.log("Hobbies:" +hobbies);
      
   /* for (let i=0;i<hobbies.length;i++){
    console.log(hobbies[i]);
    }  */
}
//calling function with first name , last name and 3 parameters.
userInfo("Anitha","Cherian","Reading","Cooking","Watching Webseries");