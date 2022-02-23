const spreadOperator = () => {
  let arr1 = [1, 2, 3, 4, 5, 6];
  console.log(...arr1);
  let arr2 = [7, 8, 9];
  arr3 = [...arr1, ...arr2];
  console.log(arr3);
};
spreadOperator();
