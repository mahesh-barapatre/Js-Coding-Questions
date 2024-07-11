// Why Use Polyfills?
// As web standards evolve, new JavaScript features are introduced that may not be immediately available in all browsers, especially older ones. Polyfills are used to "fill in" these gaps, enabling developers to write code using modern standards while maintaining compatibility with older environments.

//polyfills for bind method

const person = {
  first: "mahesh",
  second: "barapatre",
};

const say = function (hometown, state) {
  console.log(this.first + " " + this.second + " " + hometown + " " + state);
};

say.call(person, "jbp", "mp");
say.apply(person, ["jbp", "mp"]);

const bindedFunc = say.bind(person, "jbp");
bindedFunc("mp");

//polyfills
Function.prototype.mybind = function (...args) {
  // function to call
  const obj = this;
  //additional args
  params = args.slice(1);
  //arguments
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const customBinded = say.mybind(person, "jbp");
customBinded("mp");
