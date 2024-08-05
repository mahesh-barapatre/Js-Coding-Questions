// Array Methods
// Method	Description	Example
// length	Returns the number of elements in the array.	arr.length
// push()	Adds one or more elements to the end of the array.	arr.push(4)
// pop()	Removes the last element from the array.	arr.pop()
// shift()	Removes the first element from the array.	arr.shift()
// unshift()	Adds one or more elements to the beginning of the array.	arr.unshift(0)
// splice()	Adds or removes elements from the array.	arr.splice(1, 1, "a", "b")
// slice()	Returns a shallow copy of a portion of the array.	arr.slice(1, 3)
// map()	Creates a new array with the results of a function on every element.	arr.map(x => x * 2)
// filter()	Creates a new array with elements that pass the test in a function.	arr.filter(x => x > 2)
// reduce()	Executes a reducer function on each element, resulting in a single output.	arr.reduce((acc, curr) => acc + curr, 0)

let arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr); // [1, 2, 3, 4, 5]
arr.pop();
console.log(arr); // [1, 2, 3, 4]
arr.shift();
console.log(arr); // [2, 3, 4]
arr.unshift(1);
console.log(arr); // [1, 2, 3, 4]
console.log(arr.slice(1, 3)); // [2, 3]
console.log(arr.map((x) => x * 2)); // [2, 4, 6, 8]
console.log(arr.filter((x) => x > 2)); // [3, 4]
console.log(arr.reduce((acc, curr) => acc + curr, 0)); // 10

//finding the max value using reduce function
const maxVal = arr.reduce((max, curr) => {
  if (max < curr) max = curr;
  return max;
}, 0);
console.log(maxVal); //4

const user = [
  { fName: "ram", lName: "D", age: 23 },
  { fName: "Sam", lName: "S", age: 20 },
  { fName: "Nam", lName: "B", age: 34 },
];

//new array of user fullName only
const userFName = user.map((x) => x.fName + " " + x.lName);
console.log(userFName); //[ 'ram D', 'Sam S', 'Nam B' ]

//give an object having freq of people having a age
//{ 20: 1, 23: 1, 34: 1 }
const ageFreq = user.reduce((ob, curr) => {
  if (ob[curr.age]) {
    ob[curr.age]++;
  } else {
    ob[curr.age] = 1;
  }
  return ob;
}, {});
console.log(ageFreq);

//func to find fName of all the user whose age<30
//chaining filter and map methods
const over30 = user.filter((x) => x.age < 30).map((x) => x.fName);
console.log(over30); //[ 'ram', 'Sam' ]
