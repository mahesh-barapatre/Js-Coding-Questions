let arr = [1, 2, 3, 2, 12, 42, 11, 1, 2, 3];

// max no. in an array
const maxInArray = (arr) => {
  return Math.max(...arr);
};
console.log(maxInArray(arr));
