// Conceptual Questions

//1. How do we assign a value to a variable?
 const nameofvariable 


//2.How do we change the value of a variable?
 let nameofvariable = value
nameofvariable = value 2


//3. How do we assign an existing variable to a new variable?
const Newvariable = oldVariable


// ## Strings

// 1. Create a variable called `firstVariable`.
//   - assign it the value of a string => `"Hello World"`
//   - change the value of this variable to a number.
//   - store the value of `firstVariable` into a new variable called `secondVariable` 
//   - change the value of `secondVariable` to a string. 
//   - What is the value of `firstVariable`?

   let firstVariable = 'Hello World'
    firstVariable = 9
   let secondVariable = firstVariable
    secondVariable = 'string'
   9
console.log(firstVariable)
// 2. Create a variable called `yourName` and set it equal to your name as a string.
//   - Write an expression that takes the string "Hello, my name is " and 
//  the variable `yourName` so that it returns a new string with them concatenated. 
  	const yourName = "stephen"
  	 "Hello, my Name is" + yourName 
// >ex: `Hello, my name is Jean Valjean`

// ## Booleans
// - Using the provided variable definitions, 
// replace the blanks with a mathematical or boolean operator that
//  evaluates the expression to true. :wave:

// ```
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';
// ```

-  a < b;
-  c > d;
-  'Name' === 'Name';
-  a < b && c;
-  a === a && d;
-  e === 'Kevin';
-  48 !== '48';

// ...


// ## The Farm

// 1.
const animal = "cow"
if(animal ===  "cow"){
	console.log("moooo")
}
//2. 
const animal = "cow"
if(animal ===  "cow"){
	console.log("moooo")
} else {
	console.log("Hey you are not a cow")
}
// ## Driver's Ed
// 1.
// 2.
 const age 
 if (age >= 16){
	console.log("Here are the keys")
}
//3.
 const age 
 if (age >= 16){
	console.log("Here are the keys")
} else {
	console.log("Sorry your to young")
}
## Just Loop It 
1. for(let i = 0; i <= 10; i++){
console.log(i)
}
2.for(let i = 10; i <= 4000; i++){
console.log(i)
}
3.for(let i = 10; i <= 4000; i+= 2){
console.log(i)

// ## Let's get even
// 1.
for(let i = 2; i <= 100; i+=2 ){
	console.log(i + "is an even number")
}
//2.

// ## Give me Five
// 1) 
for(let i = 0; i <= 100; i ++ ){
	if( i % 5 === 0){
	console.log("I found a " + i + "High five")
	}
}
//2.
for(let i = 0; i <= 100; i ++ ){
	if( i % 5 === 0){
	console.log("I found a " + i + "High five")
	}
	if( i % 3 === 0){
	console.log("I found a " + i +". Three is a crowd")
	}
}
//## Savings account
//1.
let bank_account = 0
for(let i = 0; i <= 10; i++){
  bank_account += i
}
//2.


for(let i = 1; i <= 100; i++){
  bank_account += i * 2
}

// ## Multiples of 3 and 5
let sum = 0
for(let i = 0; i * 3 < 1000; i++){
	if(i * 3 < 1000){ 
		sum += i * 3
	}
  	if(i * 5 < 1000){ 
		sum += i * 5
	}
}
// ### Easy Does It
//1.
const quotes = ['', '', '']


// ### Random
// 1.

const randomThings = [1, 10, "Hello", true]

randomThings[0]
//2.
randomThings[2] = "world"
//3. 
console.log(randomThings)


// ### We've Got Class
// 1.
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]


ourClass[2]

//2.

ourClass[2] = "Octacat"

//3.
ourClass[4] = "Cloud City"

// ### Mix It Up
//1.
const myArray = [5 ,10 ,500, 20]
myArray.push("Egon")
//2.
myArray.pop()
//3.
myArray.unshift("Bob Marley")
//4.
myArray.splice(1,-1)
myArray.reverse()

// ### Biggie Smalls
//1.
if(number < 100){
  console.log("little number")
}else{

}
//2.
let number = 1000
if(number < 100){
  console.log("little number")
}else{
 alert("big number")
}

// ### Monkey in the Middle
// Write an `if...else if...else` statement:

// 1.

if(number < 5){
  console.log("little number")
}else if(number > 10 ) {
  console.log("big number")
}else{
  console.log("monkey")
}
// ### What's in Your Closet?
//1.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

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

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
//2.
let kristynShoe = kristynsCloset.splice(1, -1)
//3.
kristynsCloset.splice(5,0,"raybans")
//4.
kristynsCloset[4] = "stained knit hat"
//5.
thomsCloset[0][0]
thomsCloset[1][0]
thomsCloset[2][0]
console.log("Thom is wearing " + thomsCloset[0][0]+ ", " + thomsCloset[1][0] + ", " + thomsCloset[2][0] + "!" )


//9. 
thomsCloset[1][2] = "Footie Pajamas"

// ## Functions
// ### printGreeting
const printGreeting =(name) => {
	return `hello there, ${name}`
}
console.log(printGreeting('Stephen'))

//### reverseWordOrder
const reverseWordOrder =(string) => {
	return(string.split(" ").reverse().join(" "))
}
console.log(reverseWordOrder("Ishmael me call"))

console.log(reverseWordOrder("I use Lancome on my comb"))

// ### calculate

const calculate = (num1, num2, operation) =>{
	if(operation === "add"){
		return(num1 + num2 + " is a cool number")
	}else if(operation === "sub"){
		return(num1 - num2)
	}else if(operation === "mult"){
		return(num1 * num2)
	}
}
console.log(calculate(5,2,"add"))
console.log(calculate(4,3,"sub"))
console.log(calculate(5,2,"mult"))
// # 1 
const printCool = (name) => {
	return(name + " is cool")
}
console.log(printCool("Captain Reynolds"))
// #2

const calculateCube = (num1,num2) =>{
	return(Math.pow(num1, num2))
}
console.log(calculateCube(5,7));

// #3

const isAVowel = (string) =>{
 if(string === "a" || string === "e" || string === "i" || string === "o" || string === "u"){
 	return("true")
 }else {
 	return("false")
 }
}

console.log(isAVowel("a"));


// # 4

const getTwoLengths = (string1, string2) => {
	return [string1.length, string2.length]
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

//#5

const getMultipleLengths = (arrayOfStrings) => {
	const numberString = arrayOfStrings
	for(let i = 0; i < arrayOfStrings.length; i++){
		numberString[i] = arrayOfStrings[i].length
	};
	 return numberString
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//#6

const maxOfThree = (num1, num2, num3) =>{
	return Math.max(num1, num2, num3)
}
console.log(maxOfThree(6, 9, 1));

//#7
const printLongestWord = (arrayOfStrings) => {
	const longestWord = arrayOfStrings
	for(let i = 0; i < arrayOfStrings.length; i++)
	longestWord[i] = arrayOfStrings[i].length
}// need help

//#8
const transmogrifier = (a,b,c) => {
	const number = Math.pow((a * b), c);
	return number
};
transmogrifier(5,3,2)
 
// ## Syntax

{} curly braces define the object
key: value

const me = {
	name: "Kristyn",
	age: 98,
	email: "kristyn@foo.bar"
}; 
me.age = 1000;
me["place of residence"] = [ "Atlanta and Chicago"];

// ##slimer

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
monster.name();

monster.type = //not sure
monster.age = 6;

// ## Ogres

//I don't understand the game.




