let s1 = "mahesh";
let s2 = "adda";

let longStr = "hi there, I am mahesh Barapatre";

// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
function toTitleCase(str) {
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
}
console.log(toTitleCase(longStr));

//is string palindrom
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome(s1));
console.log(isPalindrome(s2));

//reverse a string
const reverseString = (s1) => {
  return s1.split("").reverse().join("");
};
console.log(reverseString(s1));
