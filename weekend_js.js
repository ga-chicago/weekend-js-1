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









