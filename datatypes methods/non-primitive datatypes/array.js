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
