//create user object 
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
   };
   //Destructure the `user` object to extract the `firstName`, `lastName`, and `email`.
   var {firstName,lastName,email}=user;
console.log(firstName);
console.log(lastName);
console.log(email);