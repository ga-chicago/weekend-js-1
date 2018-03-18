// CONCEPTUAL QUESTIONS
// 1. We assign a value to a variable by using the assignment operator ("=")
//	EX: var thisIsAVariable = "Variable";
//  EX: var numberThree = 3;
// 2. How do we change the value of a variable?
// 3. How do we assign an existing variable to a new variable?

//STRINGS

// let firstVariable = "Hello World";
// firstVariable = 1027; 
// secondVariable = firstVariable;
// secondVariable = "I am now a string."

// //Value of firstVariable is 1027

// const yourName = "Marie Louise Trull"
// console.log("Hello, my name is " + yourName + ".");

// //BOOLEANS
//  const a = 4;
//  const b = 53;
//  const c = 57;
//  const d = 16;
//  const e = 'Kevin';

// console.log(a !== b);
// console.log(c !== d);
// console.log('Name' === 'Name');
// console.log(a + b === c);
// console.log(a * a === d);
// console.log(e === 'Kevin');
// console.log(48 !== '48');

// //THE FARM

// const animal = "cow";
// if (animal === 'cow'){
// 	console.log("mooooo");
// } else {
// 	console.log("Hey! You're not a cow.");
// }

//DRIVERS ED

// let age = 16;
// if (age >= 16){
// 	console.log("Here are the keys!");
// } else {
// 	console.log("Sorry, you're too young.");
// }

// //JUST LOOP IT - 1
// const highNum = 10
// for(i = 0; i <= highNum; i++){
// 	console.log(i);
// }
// // //JUST LOOP IT -2
// const highNum2 = 4000
// for(i = 10; i<= highNum2; i++){
// 	console.log(i);
// }

// //JUST LOOP IT -3
// const highNum2 = 4000
// for(i = 10; i<= highNum2; i+=2){
// 	console.log(i);
// }


// //LET'S GET EVEN
// const numHundred = 100;
// // for(i = 1; i<=numHundred; i++){
// // 	if (i % 2 === 0){
// // 		console.log(i + " is an even number.");
// // 	}
// // }

// //GIVE ME FIVE
// const fiveNum = 100;
// for(i = 0; i<=fiveNum; i++){
// 	if(i % 5 === 0){
// 		console.log("I found a " + i + ". High five!")
// 	}
// }

//SAVINGS ACCOUNT
// let saveTotal = 0;
// for(i = 0; i<=10; i++){
// 	saveTotal +=i;
// }
// console.log(saveTotal);

// let newTotal = 0;
// for(i = 0; i<=100; i++){
// 	newTotal +=i * 2;
// }
// console.log(newTotal);

// //MULTIPLES OF 3 AND 5
// let numZero = 0;
// for(i = 0; i<100; i++){
// 	if(i % 3 === 0 || i % 5 === 0){
// 		numZero += i;
// 	}
// }
// console.log(numZero);

// //EASY DOES IT
// const quoteArray = ["It does not do to dwell on the dreams, and forget to live", "YOU SHALL NOT PASS", "Do or do not. There is no try."]
// console.log(quoteArray);

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
// What's Kristyn wearing today?
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// // // Remove left shoe from closet and save as kristynShoe.
const kristynShoe = kristynCloset[0];
kristynCloset.shift();
// Add "rayBans" after "yellow knit hat"
ristynsCloset.splice(6,0,"rayBans");
// Modify "yellow knit hat" to "stained knit hat"
kristynsCloset[5] = "stained knit hat";
// Access a shirt for Thom
thomsCloset[0][1];
// Access pants for Thom
thomsCloset[1][1];
// Access an accesory for Thom
thomsCloset[2][2];
// Log sentence about what Thom is wearing
console.log("Thom is looking fierce in a " + thomsCloset[0][1] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][2] + "!");
// Modify Thom's PJ's to "Footie Pajamas"
thomsCloset[1][2] = "Footie Pajamas";














































