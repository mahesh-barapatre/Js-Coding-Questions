// // given array with sub-arr, merge the subarrays
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// //inbuilt method
// const res = arr.flat(1);
// console.log(res);

// //using reduce function
// const usingRedRes = arr.reduce((res, it) => {
//   it.forEach((x) => {
//     res.push(x);
//   });
//   return res;
// });

// console.log(usingRedRes);

//difference between setInterval and setTimeout -
//both are HOF & timing func

//setTimeout
//function call after some delay once

// const timeoutId = setTimeout(() => {
//   console.log("This message appears after 5 seconds.");
// }, 5000);

//setInterval
//function is called repeatedly after a specific timeout

// const intervalId = setInterval(() => {
//   console.log("This message appears every 5 seconds.");
// }, 5000);

// Cancel the timeout or interval if needed by passing ID
// clearTimeout(timeoutId);
// clearInterval(intervalId);

//reverse a string
// const str = "i am a good boy with nice voice";
// const reverseStr = str.split(" ").reverse().join(" ");
// console.log(reverseStr);
