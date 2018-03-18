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

//Value of firstVariable is 1027

const yourName = "Marie Louise Trull"
console.log("Hello, my name is " + yourName + ".");

//BOOLEANS
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

//THE FARM

let animal = "cow";
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

//JUST LOOP IT - 1
const highNum = 10
for(i = 0; i <= highNum; i++){
	console.log(i);
}
// //JUST LOOP IT -2
const highNum2 = 4000
for(i = 10; i<= highNum2; i++){
	console.log(i);
}

//JUST LOOP IT -3
const highNum2 = 4000
for(i = 10; i<= highNum2; i+=2){
	console.log(i);
}












