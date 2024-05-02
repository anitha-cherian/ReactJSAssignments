//create object studentProfile
const studentProfile = {
    firstName: "John",
    lastName: "Doe",
    class:{name:"React JS Training",teacher:{name:"Kumar K",email:"kumar.k@example.com"}},
    grades:{maths:"A",english:"B",hindi:"A",science:"A"}
       };
//print student full anme using dot operator
console.log("Student Name:"+studentProfile.firstName+" "+studentProfile.lastName);
//Print the class name using bracket notation.
console.log("Class Name:"+studentProfile["class"]["name"]);
//Print the teacher's email using a mix of dot and bracket notation
console.log("Teacher's Email:"+studentProfile.class["teacher"].email);
// /Change the grade for one subject and print the updated grades object.
studentProfile.grades.english="A";
console.log("Updated Grade for English:"+studentProfile.grades.english);