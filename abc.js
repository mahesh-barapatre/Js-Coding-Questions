const person = {
  first: "mahesh",
  second: "barapatre",
  say: function () {
    console.log(this.first + this.second);
  },
};

const person2 = {
  first: "rahul",
  second: "jain",
};

//arrow function will not work because they dont have this context
//lexically inherited from the surrounding non-arrow function
let printDetails = function (hometown, state) {
  console.log(this.first + " " + this.second + " " + hometown + " " + state);
};

person.say();

//function borrowing
person.say.call(person2);

//used to call a function
//immediate call a funtion
printDetails.call(person, "jabalpur", "mp");

//same as call in apply we pass the arguments in array from
printDetails.apply(person, ["jabalpur", "mp"]);

//bind method
//return a function which bind the arguments that we can call afterwards
const bindedFunc = printDetails.bind(person, "jabalpur", "mp");
console.log(bindedFunc);
bindedFunc();
