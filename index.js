//Section A: Basic Manipulation (Syntax & Mutators)

// Exercise 1: array initialization and property Access

const productCategories = ["Books","Electronics","Clothing","Home & Kitchen","Toys & Games"];

// a
console.log(productCategories[0]);
//b
console.log(productCategories[productCategories.length-1]);

//c

console.log(productCategories.length);

//d

productCategories[1]= "Pen";

//e 

console.log(productCategories);

// Exercise 2: push , Pop ,shift , unshift Splice

let inventory = [10, 20, 30];

//a 

inventory.push(40);
console.log(inventory);

//b

inventory.pop();
console.log(inventory);

//c
inventory.unshift(0);
console.log(inventory);

//d 
inventory.shift();
console.log(inventory);

//e
inventory.splice(1,1,25,35);
console.log(inventory);


// Exercise 3: Shallow Copying of Arrays and the reference trap

//a
const originalScores = [90, 85, 78];

//b

const referenceCopy = originalScores;//Refernces copy , not a new array
console.log(referenceCopy);

// c

referenceCopy[0]=100;
console.log("originalScores:",originalScores);
console.log("Reference copy:",referenceCopy)

// d

const spreadCopy=[...originalScores];

// e
spreadCopy[2]=50;
console.log("The Original Scores:",originalScores);
console.log("The Spread Copy:",spreadCopy);


//Section B: Searching & Checking (Accessors & Iterators)

//Exercise 4: Finding Elements by Value and Index

//a
// The indexOf , lastIndexOf= if the condition is true
const studentNames = ["Alice", "Bob", "Charlie", "Alice", "David"];
console.log(studentNames.indexOf("Alice"));

// b
console.log(studentNames.lastIndexOf("Alice"));

// c
console.log(studentNames.includes("Charlie"));

// d

console.log(studentNames.includes("Eve"));