// ## Conceptual Questions

// 1. How do we assign a value to a variable?  
// We can assign a value to a variable in many different ways. A few examples would be 
// to first declare the variable such as "const x =" after the equal sign we could put the integer, string, equation, etc.. that we wanted to assign it.
// We could also assign it a value by making it equal to another variable. 
// 2. How do we change the value of a variable? 
// We can change the value of a variable by doing the same thing we did when intially assigning it a value. We could also run it through for loops and if else statements
// which depending on what they are evaluating would reassign the value.
// 3. How do we assign an existing variable to a new variable?
// We can assign an existing variable to a new variable by setting the new variable equal to the old.
// For example const x = 4 const y = x 

//Strings
// 1. Create a variable called firstVariable.
// assign it the value of a string => "Hello World"
// change the value of this variable to a number.
// store the value of firstVariable into a new variable called secondVariable
// change the value of secondVariable to a string.
// What is the value of firstVariable?

var firstVariable = "Hello World"
var firstVariable = 5
console.log(firstVariable);

// 2. Create a variable called yourName and set it equal to your name as a string.
// Write an expression that takes the string "Hello, my name is "
// and the variable yourName so that it returns a 
// new string with them concatenated.

const yourName = "Andrew Nagle"
console.log("Hello, my name is " + yourName);

// Booleans
// Using the provided variable definitions, replace the blanks
// with a mathematical or boolean operator that evaluates the 
// expression to true.
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

a < b;
c > d;
'Name' === 'Name';
a + b === c;
a * a === d;
e === 'Kevin';
48 !== '48';

// The Farm
// 1. Write code that will print out "mooooo" if variable 
// animal is equal to cow
// 2. Change your code so that if the variable animal is 
// anything other than a cow, your should 
// print out "Hey! You're not a cow."

const animal = "cow";

if (animal === "cow") {
	console.log("mooooo");
}
else {
	console.log("Hey! You're not a cow.")
};

// Driver's Ed
// 1. Write a variable that will hold a person's age
// 2. write code that will print out "Here are the keys", 
// if the age is 16 years or older.
// 3. Change your code so that if the age is younger than 16,
// a message will print "Sorry, you're to young."

let age = 16

if (age >= 16) {
	console.log("Here are the keys.")
}
else {
	console.log("Sorry, you're to young.")
};

// Just loop it
// 1. Write code that will print out all the numbers
// in the range of 0 - 10.

for (let i = 0; i < 11; i++){
	console.log(i);
};

// 2. Write code that will print out all the numbers 
// in the range 10 - 4000.

for (let i = 10; i < 4001; i++){
	console.log(i)
};

// 3. Write code that will print out every other number
// in the range 10 - 4000.

const range = 4000

for (let i = 10; i <= range; i++){
	if (i % 2 === 0){
		console.log(i)
	}
};

// Lets get even

const range = 100

for (let i = 1; i <=100; i++){
	if (i % 2 === 0){
		console.log(i + " is an even number");
	}
};

// Give me five
// 1. For the numbers 0-100, print out "I found a number. High five!"
// if the number is a multiple of five
// 2. Add to the code from above to print out "I found a number. Three is a crowd"
// if the number is a multiple of three

const range = 100

for (let i = 0; i <= range; i++){
	if (i % 5 === 0){
		console.log("I found a " + i + ". High five!");
	}
	else if (i % 3 === 0){
		console.log("I found a " + i + ". Three is a crowd.");
	}
	else {
	
	};
};

// Savings account
// 1. Write code that will save the sum of all the numbers
// between 1 - 10 to a variable called bank_account.

let bank_account = 0

for (let i = 1; i < 11; i++){
	bank_account += i
	console.log(bank_account);
};

// 2. You got a bonus! Your pay is now doubled each week. 
// Write code that will save the sum of all the numbers 
// between 1 - 100 multiplied by 2.

let bank_account = 0

for (let i = 1; i < 101; i++){
	bank_account += i * 2 
	console.log(bank_account);
};

// Multiples of 3 and 5
// If we list all the natural numbers below 10 that are 
//multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

let numb = 0

for (let i = 0; i < 1000; i++){
	if (i % 3 === 0 || i % 5 === 0){
		numb += i;
	}
};

console.log(numb);

// Easy does it 
// 1. Create an array that contains three quotes 
// and store it in a variable called quotes

const quotes = ["I find that the harder I work, the more luck I seem to have.", 
"Do, or do not. There is no 'try'.", 
"Glory is fleeting, but obscurity is forever."];

// Random
// Given the following array
const randomThings = [1, 10, "Hello", true]

// 1. how do you access the first element in the array
randomThings[0];

// 2. Change the value of "Hello" to "World"
randomThings[2] = "World";

// 3. Check the value of the array to make sure it updated the array
randomThings;

// We've got class
// Given the following array 
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

// 1. What would you write to access the 3rd element of the array?
ourClass[2];

// 2. Change the value of "Github" to "Octocat"
ourClass[2] = "Octocat"

// 3. Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");

// Mix it Up
// Given the following array 
const myArray = [5 ,10 ,500, 20]

// 5. using the push method, add the string "Egon" to the end of the array.
myArray.push("Egon");

// 6. using a method, remove the string from the end of the array.
myArray.pop();

// 7. Using the unshift method, add the string "Bob Marley"
// to the beginning of the array
myArray.unshift("Bob Marley");

// 8. using a different method, remove the string from the 
//beginnig of the array
myArray.shift();

// 9. use the reverse method on this array
myArray.reverse();

//Biggie Smalls
// Write an if..else statement
// 1. console log little number if the number entered is less than 100.
// 2. if the number entered is 100 or more, alert big number

const x = 100;

if (x < 100){
	console.log("little number");
}
else {
	alert("big number");
};

// Monkey in the Middle
// Write an if..else if..else statement
// 1. console.log little number if the number entered is less than 5.

const x = 18
if (x < 5){
	console.log("little number");
}
else if(x > 10){
	console.log("big number");
}
else{
	console.log("monkey")
};

// What's in Your Closet

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

// 1.What's Kristyn wearing today? Using bracket notation
// to access items in kristynsCloset, log the sentence 
//"Kristyn is rocking that " + the third item in Kristyn's 
// closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[3] + " today!")

// 2. Kristyn can't find her left shoe. Remove this item from 
// her closet and save it to a variable named kristynShoe.
const kristynShoe = kristynsCloset.shift();

// 3. Kristyn just bought some sweet shades! Add "raybans" 
// to her closet after "yellow knit hat".
kristynsCloset.splice(5, 0, "raybans");

// 4. Kristyn spilled coffee on her hat... modify this item 
// to read "stained knit hat" instead of yellow.
kristynsCloset[4] = "stained knit hat";

// 5. Put together an outfit for Thom! Using bracket notation, 
//access the first element in Thom's shirts array.
thomsCloset[0][0];

// 6. In the same way, access one item from Thom's pants array.
thomsCloset[1][1];

// 7. Access one item from Thom's accessories array.
thomsCloset[2][2];

// 8. Log a sentence about what Thom's wearing. 
//Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thoms is styling in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][2] + "!");

// 9. Get more specific about what kind of PJs Thom's 
// wearing this winter. Modify the name of his PJ pants 
// to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";

// Functions
// printGreeting
// Write a function called printGreeting with a parameter name 
// that returns a greeting with the argument interpolated 
// into the greeting.

const printGreeting = (name) => {
	return "Hello there, " + name + "!"
}

console.log(printGreeting("Andrew"));

// reverseWordOrder
// Write a function reverseWordOrder that accepts a single 
// argument, a string. The function should return a string 
// with the order of the words reversed. 
// Don't worry about punctuation.

const reverseWordOrder = (words) =>{

	return words.split(" ").reverse().join(" ")
}

console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));

// calcualate
// write a function called calculate
// This function should take three arguments, two numbers 
//and a string.
// Name the parameters num1, num2, and operation.
// If the function receives the string "add" for the
// operation parameter, it will return the sum of num1 and num2.
// If the function receives the string "sub" for the 
// operation parameter, it will return num1 minus num2.
// Do the same thing for multiplication "mult", division "div",
// and exponent "exp" (where num2 is the exponent of num1).

const calculate = (num1, num2, operation) =>{
	if (operation === "add"){
		return num1 + num2;
	}
	else if (operation === "sub"){
		return num1 - num2;
	}
	else if (operation === "mult"){
		return num1 * num2;
	}
	else if (operation === "div"){
		return num1 / num2;
	}
	else if (operation === "exp"){
		return Math.pow(num1, num2);
	}
	else {
		return null;
	}
};

console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "exp"));
console.log(calculate(4, 3, "por que"));

// 1 
// Write a function printCool that accepts one parameter, name 
// as an argument. The function should print the name and a 
// message saying that that person is cool.

const printCool = (name) =>{
	return name + " is cool"
};

console.log(printCool("Captain Reynolds"));

// 2 
// Write a function calculateCube that takes a single number 
//and prints the volume of a cube made from that number.

const calculateCube = (numb) =>{
	return numb * numb * numb
}
console.log(calculateCube(5));

// 3
// Write a function isAVowel that takes a character 
// (i.e. a string of length 1) and returns true if it is 
// a vowel, false otherwise. The vowel could be 
// upper or lower case.

const isAVowel = (character) =>{
	if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" ||
	character === "A" || character === "E" || character === "I" || character === "O" || character === "U") {
		return "true"
	}
	else {
		return "false"
	}
};

console.log(isAVowel("a"));
console.log(isAVowel("E"));
console.log(isAVowel("I"));
console.log(isAVowel("b"));
console.log(isAVowel("U"));

// 4
// Write a function getTwoLengths that accepts two parameters 
// (strings). The function should return an array of numbers 
// where each number is the length of the corresponding string.
const stringArray = [];

const getTwoLengths = (string1, string2) => {
	stringArray.push(string1.length);
	stringArray.push(string2.length);

};

console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5
// Write a function getMultipleLengths that accepts a single 
// parameter as an argument: an array of strings. 
// The function should return an array of numbers where 
// each number is the length of the corresponding string.
const stringArray = [];

const getMultipleLengths = (array) => {
	for (let i = 0; i < array.length; i++){
		stringArray.push(array[i].length)
		console.log(stringArray)
	}
};

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// 6 
// Define a function maxOfThree that takes three numbers 
// as arguments and returns the largest of them. 
// If all numbers are the same, it doesn't matter which 
// one is returned. If the two largest numbers are the same, 
// one of them should be returned.

const maxOfThree = (x, y, z) => {
	const max = Math.max(x, y, z);
	return max;
};

console.log(maxOfThree(9, 20, 20));

// 7
// Write a function printLongestWord that accepts a single
// argument, an array of strings. The method should return
// the longest word in the array. In case of a tie, the method
// should return the word that appears first in the array.

const printLongestWord = (array) => {
	let longestWord = '';
	for (let i = 0; i < array.length; i++){
		if (array[i].length > longestWord.length){
			longestWord = array[i];
		} 
	}
	console.log(longestWord);
};



console.log(printLongestWord(["BoJack", "Princess", "Diane",
 "a", "Max", "Peanutbutter", "big", "asdedfefasew"]));

// 8 
// Write a Javascript function called transmogrify. 
// This function should accept three arguments, 
// which you can assume will be numbers. 
// Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the
// product of the first two numbers, raised to the power of 
//the third number.
// For example, the transmogrified result of 5, 3, and 2 
// is (5 times 3) to the power of 2 is 225.

const transmogrify = (x, y, z) => {
	let transmogrified = Math.pow(x * y, z) 
		return transmogrified
};

console.log(transmogrify(5, 3, 2));

// Objects
// Syntax
// List and describe each individual piece of syntax that
// we use to construct an object. 
// Don't leave anything out! The list is finite.

const ralph = {
	stuff: "sunglasses"
}

 const makes the object immutable
ralph is the object name
= the equal sign initializes the object
{} curly braces definge the object
stuff: is a property of ralph
"Sunglasses" is the value of stuff:

// Me
// 1. Create an empty object called me.
const me = {

}
console.log(me);
// 2. Assign it properties for name, age, 
// and email with corresponding values.

me.name = "Andrew";
me.age = 28;
me.email = "andrewnagle99@gmail.com"

console.log(me);
// 3. Using dot notation, access the name property in your object.
console.log(me.name);
// 4. Without writing directly into the object,
// update the value of age to be 1000 years old.
me.age = 1000;
// 5. Using dot notation, verify that age has been updated.
console.log(me.age);
// 6. Add a key to this object called: "place of residence" 
// and give it a value of your hometown. Note that 
//the key has spaces, therefore you cannot use dot notation.
me["place of residence"] = "Novi";
// 7. Access the value of "place of residence"
console.log(me["place of residence"]);

// Slimer
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
};

// Given the slimer object:
// What would you write to access the name and console.log it?
console.log(monster.name);
// What would you write to change the type to 'creature' 
// (without changing it inside the object)
monster.type = "creature";
// What would you write to add a key to the object called age,
// and set the age to 6?
monster['age'] = 6
// console.log the object to make sure type 
// is creature, and age is 6
console.log(monster);

// Ogres
// Let's say you want to make an adventure game where you 
// are an adventurer and you are going to fight ogres.
// Using objects, create models and have them interact.
// how would you model your adventurer? Your adventurer will 
// want a name and hitpoints. What else 
// would your adventurer need?

const adventurer = {
	name: "Leeroy",
	hitpoints: 10000,
	gear: ["sword", "shield", "breastplate", "helmet", "pants", "boots", "gloves"],
	mount: "dragon"
	strength: 100
	defense: 100
};

const ogre = {
	hitpoints: 50000
	strength: 200
}

// ahhhh game code here?


//Extra stuff
// Cat combinator
// 1. Mama Cat
// Define an object called cat1 that contains 
// the following properties:

const cat1 = {
	name: "Pam",
	breed: "Bengal",
	age: 4
};

console.log(cat1.age);
console.log(cat1.breed);
// 2. Papa cat
// Define an object called cat2 that 
// also contains the properties:
const cat2 = {
	name: "Marvin",
	breed: "Maine coon",
	age: 5
}
// 3. Combine Cats!
// The cats are multiplying!
// Write a function combineCats that has two parameters 
// mama, and papa. The function will take 
// two arguments -- each a cat object.

const combineCats = (mama, papa) => {
	console.log(mama);
	console.log(papa);

	const combinedCat = {
		name: mama.name + papa.name,
		breed: mama.breed + "-" + papa.breed,
		age: papa.age - mama.age
	}
	return combinedCat
};

combineCats(cat1, cat2);

// 4. Cat brain breeder
//If catCombinator returns an object, and if catCombinator
// takes objects as arguments, then it stands to reason that:
// catCombinator can use itself as its own argument.
// Take a second to stew on that . . .

// What is the result of:

console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

// Whoa . . .
// The above console.log is two levels deep of combineCats.
// Write a console.log that is three levels deep 
// of combineCats. combineCats should have two arguments, 
// each which are combineCats, each which have two 
// arguments, each which are combineCats.

// My best attempt continues to tell me canot read name of the papa cat once I try to go past the initial console.log you gave us.
console.log(combineCats(combineCats(cat1, cat2)), combineCats(cat1, cat2) + combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));










