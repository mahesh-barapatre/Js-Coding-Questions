let arr = [1, 2, 3, 2, 12, 42, 11, 1, 2, 3];
let NesArr = [
  [1, 3, 4],
  [2, 5, 7],
  [1, 2, 1],
];

//nested array max ele
const mxNestedArr = (arr) => {
  let mx = INT_MIN;
  for (let a of arr) {
    if (mx < Math.max(...a)) {
      mx = Math.max(...a);
    }
  }
  return mx;
};
console.log(mxNestedArr(NesArr));

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
