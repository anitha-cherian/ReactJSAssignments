//function that takes an object as a parameter and uses destructuring to extract `firstName`and `email` from it
function destructUser(user){
    var {firstName,email}=user;
    console.log(firstName);
    console.log(email);
    }
    //define user object
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
   };
   //calling function with the `user` object
destructUser(user);