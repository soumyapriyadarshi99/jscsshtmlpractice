test("Testing addition function", () => {
  let result = addition(10, 15);
  equal(result, 25, "added number are 10 and 25");
});

test("Testing addition fuction for negative number", () => {
  let result = addition(-10, 15);
  equal(result, 5, "added number are -10 and 15");
});

test("Testing addition fuction for negation", () => {
  let result = addition(2, 8);
  notEqual(result, 11, "negation testing 2 and 8");
});

test("Testing checkEven fuction", () => {
  let result = checkEven(8);
  equal(result, "even", "even function check");
});
test("Testing checkEven fuction", () => {
  let result = checkEven(5);
  equal(result, "odd", "even function check");
});
test("Testing checkEven fuction", () => {
  let result = checkEven(1);
  equal(result, "odd", "even function check");
});
