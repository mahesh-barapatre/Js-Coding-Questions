// Object Methods
// Method	Description	Example
// Object.keys()	Returns an array of the object's property names.	Object.keys(obj)
// Object.values()	Returns an array of the object's property values.	Object.values(obj)
// Object.entries()	Returns an array of the object's [key, value] pairs.	Object.entries(obj)
// Object.assign()	Copies all enumerable properties from one or more source objects to a target object.	Object.assign(target, source)
// Object.freeze()	Freezes an object, preventing new properties from being added or existing ones from being removed.	Object.freeze(obj)

let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a", "b", "c"]
console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]
let newObj = Object.assign({}, obj, { d: 4 });
console.log(newObj); // { a: 1, b: 2, c: 3, d: 4 }
Object.freeze(obj);
obj.a = 10; // No effect
console.log(obj.a); // 1
