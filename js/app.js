// THE WEEKEND HOMEWORK 

//conceptual questions

// #1
// We can assign a value to a variable using const, let, or var. It looks like this:
// const a = "turtle";
// let b = 8;
// var c = ["tiger", "etc."]

// // #2
// // We can change the value of variables that are defined using let or var. It looks like this (using the functions defined above):
// b = 22;
// c = ["this", "is", "a", "different", "thing"];

// // #3
// // we can assign an existing variable to a new variable like this:
// const d = a;
// let e = c;



// Strings
// #1
let firstVariable = "Hello World";
firstVariable = 42;
let secondVariable = firstVariable;
secondVariable = "This is a string";

// the value of firstVariable is 42. 

// #2
const yourName = "Hannah";
// console.log("Hello, my name is " + yourName);




// Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

a < b
c > d
'Name' === 'Name';
a + b === c;
a * a === d;
e === 'Kevin';
48 == '48'



// THE FARM 

// 1. write code that will print out 'moooooo' if the variable animal is equal to cow
let animal = "fish"; 

// if (animal === 'cow') {
// 	console.log("mooooooo")
// }

// #2  
// if (animal === 'cow') {
// 	console.log("mooooooo")
// } else {
// 	console.log("Hey! You're not a cow.")
// }


// DRIVER'S ED 

// #1
let age = 20;

// #2
// if (age >= 16) {
// 	console.log("Here are the keys")
// }

// #3
// if (age >= 16) {
// 	console.log("Here are the keys")
// } else {
// 	console.log("Sorry, youre too young.")
// }


// JUST LOOP IT

// #1
for (let i = 0; i <= 10; i++) {
	// console.log(i)
}

// #2
for (let i = 10; i <= 4000; i++) {
	// console.log(i)
}

// #3
for (let i = 10; i <= 4000; i += 2) {
	// console.log(i)
}


/// LET'S GET EVEN 

// #1
for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		// console.log(i)
	}
}

// #2
for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		console.log(i + " is an even number")
	}
}

