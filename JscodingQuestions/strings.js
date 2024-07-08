let s1 = "mahesh";
let s2 = "adda";

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
