//add object :address with properties `street` and `city to user object and print street and city
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    address:{street:"Madiwala",city:"bangalore"}
   };
   var {address:{street},address:{city}}=user;
console.log(street);
console.log(city);
