let fname = "Soumya priyadarshi";
let lname = "Das";

//es5
console.log("My first name is " + fname + " and my last name is " + lname);
//es6
console.log(`My first name is ${fname} and my last name is ${lname}`);

let a = 50,
  b = 70;
//es5
console.log("Onetwenty is" + (a + b) + " and\nnot" + (a + b) * 2);
//es6
console.log(`onetwenty is ${a + b} and
not ${(a + b) * 2}`);

console.log(`${fname}`.startsWith("S"));
console.log(`${fname}`.endsWith("i"));
console.log(`${fname} ${lname} `.repeat(10));
