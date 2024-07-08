// Number Methods
// Method	Description	Example
// toFixed()	Formats a number using fixed-point notation.	num.toFixed(2)
// toString()	Converts a number to a string.	num.toString()
// parseInt()	Parses a string and returns an integer.	parseInt(str)
// parseFloat()	Parses a string and returns a floating-point number.	parseFloat(str)

let num = 123.456;
console.log(num.toFixed(2)); // "123.46"
console.log(num.toString()); // "123.456"
let str = "123";
console.log(parseInt(str)); // 123
let floatStr = "123.45";
console.log(parseFloat(floatStr)); // 123.45
