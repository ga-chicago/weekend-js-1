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
// console.log("Thom is looking fierce in a " + thomsCloset[0][2] + ", " + thomsCloset[1][1] + ", and a " + thomsCloset[2][1] + "!")

// #9
thomsCloset[1][2] = "Footie Pajamas"


// FUNCTIONS 

// printGreeting

const printGreeting = (name) => {
	console.log("Hello there, " + name + "!")
} 

// reverseWordOrder

const reverseWordOrder = (str) => {
	let splitStr = str.split(' ');
	let reverseString = splitStr.reverse();
	return reverseString.join(' ')
}

str = "Call me Ishmael"

// calculate 

const calculate = (num1, num2, operation) => {
	if (operation === 'add') {
		return num1 + num2;
	} else if (operation === 'sub') {
		return num1 - num2;
	} else if (operation === 'mult') {
		return num1 * num2;
	} else if (operation === 'div') {
		return num1 / num2;
	} else if (operation === 'exp') {
		return num1 ** num2;
	}
}

// console.log(calculate(4,3,"sub"))
// console.log(calculate(4,3,"exp"))

//  # 1

const printCool = (name) => {
	return(name + " is cool")
}

// console.log(printCool("Hannah")) // "Hannah is cool"
 
// #2

const calculateCube = (num) => {
	return (num ** 3); 
}

// console.log(calculateCube(5)) // 125

// #3

const isAVowel = (char) => {
	if (char.length > 1) {
		console.log("Invalid input.")
	} else if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
		return true;
	} else {
		return false;
	}
}

// #4 GET TWO LENGTHS 

let lengths = [];

const getTwoLengths = (str1, str2) => {
	lengths[0] = str1.length;
	lengths[1] = str2.length;

	return lengths;
}

// console.log(getTwoLengths("Hank", "Hippopopalous"));

// #5 GET MULTIPLE LENGTHS

const getMultipleLengths = (arrOfStrings) => {
	lengths = [];
	for (let i = 0; i < arrOfStrings.length; i++) {
		lengths.push(arrOfStrings[i].length)
	}

	return lengths;
	// loop through this array
	// for each string, find the length, push it to lengths
}

arrOfStrings = ["here", "are", "some", "supercalifragelisticexpialedocious", "newer", "strings", "supercalifragelisticexpialedocious"]

// console.log(getMultipleLengths(arrOfStrings));

// #6 MAX OF THREE 

const maxOfThree = (num1, num2, num3) => {
	const numArray = [num1, num2, num3]
	return Math.max(...numArray);
}

// #7 printLongestWord

const printLongestWord = (arrOfStrings) => {
	const lengthsOfStrings = [];

	for (let i = 0; i < arrOfStrings.length; i++) {
		lengthsOfStrings.push(arrOfStrings[i].length)
	}

	const max = Math.max(...lengthsOfStrings);

	for (let j = 0; j < arrOfStrings.length; j++) {
		if (lengthsOfStrings[j] === max) {
			return arrOfStrings[j]
		}
	}
}


// #8 transmorgrify

const transmorgrify = (num1, num2, num3) => {
	return (num1 * num2) ** num3;
}


// objects

// SYNTAX

let myObject = {
	thing: "this thing",
	otherThing: false
}

// use let or const to create a variable. use curly braces to define that the variable is an object. Inside the curly braces, write the key-value pairs. In this object, 'thing' and 'otherThing' are keys, and '"this thing"' and 'false' are values. There is a comma after every key-value pair except the last one. 

// ME 

// #1
let me = {};

// #2
me.name = "Hannah"
me.age = 22;
me.email = "hanna.w28@gmail.com"

// #3
me.name; // returns "Hannah"

// #4
me.age = 1000;

// #5
me["place of residence"] = "Chicago";

// #6
me["place of residence"]


// slimer

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

// console.log(monster.name) // "Slimer"
monster.type = "creature"; // changes type to creature
monster.age = 6;
// console.log(monster.type, monster.age)


// OGRES 

const adventurer = {
	name: "Harry Potter",
	hitpoints: 9,
	belongings: ["wand", "glasses", "broomstick"]
}

const ogre = {
	name: "Gross Ogre",
	hitpoints: 6
}

const ogreAttacksHarry = (strengthOfAttack, defense) => {
	// ogre attacks harry with attackstrength, harry defends with defense
	if (strengthOfAttack > defense) {
		adventurer.hitpoints -= 5;
		if (adventurer.hitpoints > 0) {
			return ("Your defense was unsuccessful. You lost 5hp. You now have " + adventurer.hitpoints + " hitpoints remaining. Beware of the ogre.")
		} else if (adventurer.hitpoints <= 0) {
			return ("Your defense was unsuccessful. You are dead.")
		} 
		
	} else if (strengthOfAttack < defense) {
		ogre.hitpoints -= 5;
		if (ogre.hitpoints > 0) {
			return ("Your attack was successful and caused 5hp of damage. Your enemy has " + ogre.hitpoints + " hitpoints remaining. Please attack again.")
		} else if (ogre.hitpoints <=0) {
			return "Congratulations, you defeated the ogre. Continue to the next challenge."
		}	
	}
}


// EXTRA STUFF 

// #1 MAMA CAT

const cat1 = {
	name: "Fluffy",
	breed: "extra fluffy cat",
	age: 4
}

// console.log(cat1.age)
// console.log(cat1.breed)

// #2 papa cat

const cat2 = {
	name: "Socks",
	breed: "black cat",
	age: 5
}

// #3 combine cats

const combineCats = (mama, papa) => {
	const newCat = {};
	newCat.name = mama.name + papa.name;
	newCat.age = 1;
	newCat.breed = mama.breed + "-" + papa.breed;
	return newCat;
}

combineCats(cat1, cat2)

// #4 cat brain bender (this catception makes my brain hurt)

const doubleCat = combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
console.log(combineCats(doubleCat, doubleCat))