let myarr = ["c", "java", "js", "react", "c++"];
let [i1, i2, i3] = myarr;
console.log(`${i1} ${i2} ${i3}`);

let a = 10,
  b = 20;
console.log(`${a} ${b}`);
[a, b] = [b, a];
console.log(`${a} ${b}`);
