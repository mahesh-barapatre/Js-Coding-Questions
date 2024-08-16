const arr1 = [1, 2, 2, 3, 5];
const arr2 = [1, 2, 2, 4, 6, 7];

const intersect = (arr1, arr2) => {
  let intersectArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] == arr2[j]) {
      intersectArr.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else i++;
  }
  return intersectArr;
};
const iArr = intersect(arr1, arr2);
console.log(iArr);

///method using hashmap
//hashmap making
const intersect2 = (arr1, arr2) => {
  let ans = [];
  let mpp = {};
  arr1.forEach((x) => {
    if (mpp[x]) mpp[x]++;
    else {
      mpp[x] = 1;
    }
  });
  arr2.forEach((x) => {
    if (mpp[x] && mpp[x] != 0) {
      ans.push(x);
      mpp[x]--;
    }
  });
  return ans;
};
const intersection = intersect2(arr1, arr2);
console.log(intersection);
