//sum of two number--
const sum = (a, b) => {
  return a + b;
};
console.log(sum(1, 2));

//factorial of a given number
//recursion
const fact = (num) => {
  if (num == 0 || num == 1) return num;
  return fact(num - 1) * num;
};
console.log(fact(6));

//fibonacci of a given number
//recursion
const fibo = (num) => {
  if (num == 0 || num == 1) return num;
  else return fibo(num - 1) + fact(num - 2);
};
console.log(fibo(6));
