let arr = [1, 2, 3, 2, 12, 42, 11, 1, 2, 3];

// max no. in an array
const maxInArray = (arr) => {
  return Math.max(...arr);
};
console.log(maxInArray(arr));

//return only 7 number in new arr
const trim = (arr1) => {
  //slice return shallow copy of array
  return arr1.slice(0, 7);
};
console.log(trim(arr1));

//func return arr with only even numbers
const onlyEven = (arr) => {
  return arr.filter((i) => i % 2 == 0);
};
console.log(onlyEven(arr1));
