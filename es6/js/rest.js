const addition = (...inputs) => {
  console.log(inputs); //[1,2,3,4,5,6,7]
  console.log(...inputs); //1 2 3 4 5 6 7
  let sum = 0;
  for (i of inputs) {
    sum += i;
  }
  console.log(sum);
};
//addition(1, 2, 3, 4, 5, 6, 7);

const stringCheck = (a, b, ...c) => {
  console.log(`${a} ${b}`);
  console.log(c);
  console.log(...c);
};
stringCheck("rohit", "virat", "surya", "sachin", "rahul");
