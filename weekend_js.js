// CONCEPTUAL QUESTIONS
// 1. We assign a value to a variable by using the assignment operator ("=")
//	EX: var thisIsAVariable = "Variable";
//  EX: var numberThree = 3;
// 2. How do we change the value of a variable?
// 3. How do we assign an existing variable to a new variable?

//STRINGS

let firstVariable = "Hello World";
firstVariable = 1027; 
secondVariable = firstVariable;
secondVariable = "I am now a string."

// //Value of firstVariable is 1027

const yourName = "Marie Louise Trull"
console.log("Hello, my name is " + yourName + ".");

// //BOOLEANS
 const a = 4;
 const b = 53;
 const c = 57;
 const d = 16;
 const e = 'Kevin';

console.log(a !== b);
console.log(c !== d);
console.log('Name' === 'Name');
console.log(a + b === c);
console.log(a * a === d);
console.log(e === 'Kevin');
console.log(48 !== '48');

// //THE FARM

const animal = "cow";
if (animal === 'cow'){
	console.log("mooooo");
} else {
	console.log("Hey! You're not a cow.");
}

//DRIVERS ED

let age = 16;
if (age >= 16){
	console.log("Here are the keys!");
} else {
	console.log("Sorry, you're too young.");
}

// //JUST LOOP IT - 1
const highNum = 10
for(i = 0; i <= highNum; i++){
	console.log(i);
}
// // //JUST LOOP IT -2
// const highNum2 = 4000
// for(i = 10; i<= highNum2; i++){
// 	console.log(i);
// }

// // //JUST LOOP IT -3
// const highNum2 = 4000
// for(i = 10; i<= highNum2; i+=2){
// 	console.log(i);
// }


// //LET'S GET EVEN
const numHundred = 100;
for(i = 1; i<=numHundred; i++){
	if (i % 2 === 0){
		console.log(i + " is an even number.");
	}
}

// //GIVE ME FIVE
const fiveNum = 100;
for(i = 0; i<=fiveNum; i++){
	if(i % 5 === 0){
		console.log("I found a " + i + ". High five!")
	}
}

//SAVINGS ACCOUNT
let saveTotal = 0;
for(i = 0; i<=10; i++){
	saveTotal +=i;
}
console.log(saveTotal);

let newTotal = 0;
for(i = 0; i<=100; i++){
	newTotal +=i * 2;
}
console.log(newTotal);

//MULTIPLES OF 3 AND 5
let numZero = 0;
for(i = 0; i<100; i++){
	if(i % 3 === 0 || i % 5 === 0){
		numZero += i;
	}
}
console.log(numZero);

// //EASY DOES IT
const quoteArray = ["It does not do to dwell on the dreams, and forget to live", "YOU SHALL NOT PASS", "Do or do not. There is no try."]
console.log(quoteArray);

//RANDOM
const randomThings = [1,10,"Hello", true];
//Access first item in the array
randomThings[0];
//Change the value of "Hello" to "World"
randomThings[2] = "World";

//WE'VE GOT CLASS
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];
//Access the third element of the array
ourClass[2];
//Change the value of "Github" to "Octocat"
ourClass[2] = "Octocat";
//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");

//MIX IT UP
const myArray = [5, 10, 500, 20];
// Add "Egon"
myArray.push("Egon");
// Remove string
myArray.pop();
// unshift + add Bob Marley
myArray.unshift("Bob Marley");
// remove string with a different method
myArray.shift();
// reverse method on the array
myArray.reverse(); //***This seems too simple. Was this what we were supposed to do? 

//BIGGIE SMALLS
const numSize = 260;
if (numSize < 100){
	console.log("little number")
} else {
	console.log("big number")
}

//MONKEY IN THE MIDDLE
const monkeyNum = 2;
if (monkeyNum < 5){
	console.log("little number")
} else {
	if (monkeyNum > 10){
		console.log("big number")
	} else {
		console.log("monkey")
	}
}

//WHAT'S IN YOUR CLOSET?

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


// // What's Kristyn wearing today?
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// // // // Remove left shoe from closet and save as kristynShoe.
const kristynShoe = kristynsCloset[0];
kristynsCloset.shift();
// // Add "rayBans" after "yellow knit hat"
kristynsCloset.splice(6,0,"rayBans");
// // Modify "yellow knit hat" to "stained knit hat"
kristynsCloset[5] = "stained knit hat";
// // Access a shirt for Thom
thomsCloset[0][1];
// // Access pants for Thom
thomsCloset[1][1];
// // Access an accesory for Thom
thomsCloset[2][2];
// // Log sentence about what Thom is wearing
console.log("Thom is looking fierce in a " + thomsCloset[0][1] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][2] + "!");
// // Modify Thom's PJ's to "Footie Pajamas"
thomsCloset[1][2] = "Footie Pajamas";

//FUNCTIONS

//printGreeting
const printGreeting = (name) => {
	console.log("Hello there, " + name + "!")
}

//reverseWordOrder
const reverseWordOrder = (string) => {
	let stringArray = string.split (" ");
	// console.log(stringArray);
	let reverseStringArray = stringArray.reverse();
	// console.log(reverseStringArray);
	let newString = reverseStringArray.join(" ");
	return newString;
	console.log(newString)
}

//calculate
const calculate = (num1,num2,operation) => {
	if(operation === "add"){
		return num1 + num2;
	}
	if(operation === "sub"){
		return num1 - num2;
	}
	if(operation === "mult"){
		return num1 * num2;
	}
	if(operation === "div"){
		return num1 / num2;
	}
	if(operation === "exp"){
		return Math.pow(num1,num2);
	}
}

//Examples to check each if statement
const mathTestAdd = calculate(2,5,"add");
console.log(mathTestAdd)
const mathTestSub = calculate(2,5,"sub");
console.log(mathTestSub)
const mathTestMult = calculate(2,5,"mult");
console.log(mathTestMult)
const mathTestDiv = calculate(9,3,"div");
console.log(mathTestDiv)
const mathTestExp = calculate(2,3,"exp");
console.log(mathTestExp)

//printCool
const printCool = (name) => {
	console.log(name + " is cool")
}

//calculateCube
const calculateCube = (num) => {
	cubed = Math.pow(num, 3);
	console.log(cubed);
}

//isAVowel
const isAVowel = (letter) => {
	letter = letter.toLowerCase(); //I figured this was easier than typing out "or" statements for the capital letters as well. 
	if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
		return true;
	} else {
		return false;
	}
}

//getTwoLengths
const getTwoLengths = (string1, string2) => {
	return [string1.length, string2.length]

}

//getMultipleLengths
const getMultipleLengths = (strings) =>{
	const lengthsArray = [];
	for(i = 0; i < strings.length; i++){
		lengthsArray.push(strings[i].length);
	}
	return lengthsArray;
}

//maxOfThree
const maxOfThree = (num1, num2, num3) => {
	maxNum = Math.max(num1, num2, num3);   //I tried to do this with conditional statements but then the internet showed me Math.max. I feel like it's cheating a bit? Maybe not? 
}

//printLongestWord
const printLongestWord = (strings) => {
	const lengthsArray2 = [];				// I tried to call the getMultipleLengths function into here and kept getting an error. I ended up just re-writing it - ideally though I would've just called the prior function. 
	for(i = 0; i < strings.length; i++){
		lengthsArray2.push(strings[i].length);
		return lengthsArray2;
		const bigString = Math.max(lengthsArray2); //identify the length of the longest string
	}
	for(i = 0; i < strings.length; i++){   // Run through the array of strings
		if (bigString === strings[i].length){ // compare the length of the longest string to the length of the string it's looking at in each iteration. Run until you get to the string that has a length that matches the longest length. 
			return strings[i]; //returning the length of the first string - not the longest. SOS. 
		}
	}
}

//transmogrify
const transmogrify = (num1, num2, num3) => {
	multNum = (num1 * num2);
	powNum = Math.pow(multNum, num3);
	console.log(powNum);
}

//OBJECTS

//SYNTAX
// Objects are made up of methods and properties. The Methods refer to functions, 
// whereas the properties refer to the object's value. 
// Object literals (not sure if I used that correctly) are made up of "key"-"value" pairs. They key gives a name to the value. 
// The value can be any sort of data type (string, number, boolean, etc.)
// We use curly braces to define the object. All keys and values can be found within the curly braces. 
// Keys and Values can be called from an object using either dot or bracket notation. 
// When doing so, use the object and key to call the value. 


//ME
const me = {
	name: 'Marie',
	age: 26,
	email: 'MarieTrull@gmail.com',
}
// Access name using dot notation
me.name 
// Update value of age to 1000
me.age = 1000
// Verify age change using dot notation
me.age
// Add "place of residence" key
me["place of residence"] = "Chicago"
// Access "place of residence" value 
me["place of residence"]

//SLIMER
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
// Access name + console.log it
console.log(monster.name)
// Change the type to creature
monster.type = "creature"
// Add a key "age" with value 6
monster.age = 6
// console.log the object to verify change
console.log(monster.age)

//OGRES

const adventurer = {
	name: "Lord Farquaad",
	hitpoints: 4,
}

const ogre = {
	name: "Shrek",
	hitpoints: 10,
}

const fight = (ogre, adventurer) => {
	for (i = 0; i < 10; i++){
		ogre.hitpoints = ogre.hitpoints - 1;
		adventurer.hitpoints = adventurer.hitpoints - 1;
		if (ogre.hitpoints === 0 && adventurer.hitpoints > 0){
			console.log("Game over. YOU LOST YOUR DANG SWAMP SHREK.")
		} else {
			if (adventurer.hitpoints === 0 && ogre.hitpoints > 0){
				console.log("Game over. SHREK ATE YOU AND YOU DIDN'T GET HIS SWAMP.")
			}
		}
	}
}
















































