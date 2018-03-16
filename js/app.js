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
		// console.log(i + " is an even number")
	}
}


// GIVE ME FIVE 

// #1
for (let i = 0; i <= 100; i++) {
	if (i % 5 === 0) {
		// console.log("I found a " + i + ". High five!")
	}
}

// #2
for (let i = 0; i <= 100; i++) {
	if (i % 5 === 0) {
		// console.log("I found a " + i + ". High five!")
	} else if (i % 3 === 0) {
		// console.log("I found a " + i + ". Three is a crowd")
	}
}


// SAVINGS ACCOUNT

// #1 
let bank_account = 0;

for (let i = 1; i <=10; i++) {
	bank_account += i;
}

// #2
bank_account = 0;

for (let i = 1; i <= 100; i ++) {
	bank_account += 2*i
}


// MULTIPLES OF 3 AND 5 

let sum = 0;

for (let i = 0; i < 1000; i++) {
	if (i % 3 === 0) {
		sum += i;
	} else if (i % 5 === 0) {
		sum += i;
	}
}


// easy does it 

const quotes = ["this is a quote - 'Hannah'", "this is also a quote - 'Hannah'", "yet again, this is also a quote - 'Hannah'"]


// random

const randomThings = [1, 10, "Hello", true]

// #1
randomThings[0];

// #2
randomThings[2] = "World";

// #3
// console.log(randomThings);


// WE'VE GOT CLASS 

const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

// #1
ourClass[2];

// #2
ourClass[2] = "Octocat";

// #3
ourClass.push("Cloud City")



// MIX IT UP 

// #4
const myArray = [5 ,10 ,500, 20]

// #5
myArray.push("Egon");

// #6
myArray.pop();

// #7
myArray.unshift("Bob Marley");

// #8
myArray.shift();

// #9
myArray.reverse();


/// BIGGIE SMALLS 

// #1
// if (prompt('Enter a number') < 100) {
// 	console.log("little number")
// } else {
// 	console.log("big number")
// }


// MONKEY IN THE MIDDLE 
// var number = prompt("Enter a number")

// if (number < 5) {
// 	console.log("little number")
// } else if (number > 10) {
// 	console.log("big number")
// } else {
// 	console.log("monkey")
// }


// WHAT'S IN YOUR CLOSET 

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// #1
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// #2
const kristynShoe = kristynsCloset[0];
kristynsCloset.shift();

// #3
kristynsCloset.splice(5, 0, 'raybans')

// #4
kristynsCloset[4] = "stained knit hat"

// #5
thomsCloset[0][2]; // light blue button-up

// #6
thomsCloset[1][1]; // jeans

// #7
thomsCloset[2][1] // wool scarf

// #8
console.log("Thom is looking fierce in a " + thomsCloset[0][2] + ", " + thomsCloset[1][1] + ", and a " + thomsCloset[2][1] + "!")

// #9
thomsCloset[1][2] = "Footie Pajamas"

