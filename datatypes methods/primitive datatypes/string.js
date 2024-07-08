// String Methods
// Method	Description	Example
// length	Returns the length of the string.	str.length
// toUpperCase()	Converts the string to uppercase.	str.toUpperCase()
// toLowerCase()	Converts the string to lowercase.	str.toLowerCase()
// includes()	Checks if the string contains a specified value.	str.includes("ell")
// replace()	Replaces a specified value with another value in the string.	str.replace("ell", "ey")
// split()	Splits the string into an array of substrings.	str.split(" ")
// substring()	Extracts a part of the string between two specified indices.	str.substring(0, 5)
// trim()	Removes whitespace from both ends of the string.	str.trim()

let str = "Hello World";
console.log(str.length); // 11
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.includes("World")); // true
console.log(str.replace("World", "Everyone")); // "Hello Everyone"
console.log(str.split(" ")); // ["Hello", "World"]
console.log(str.substring(0, 5)); // "Hello"
console.log(str.trim()); // "Hello World"
