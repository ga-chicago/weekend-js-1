// 1 // How do we assign a value to a variable?
Using a let statement.


// 2 // How do we change the value of a variable?

by refering to the var within the corresponding function



// 3 // How do we assign an existing variable to a new variable?
concatenate the 2 strings.




// STRINGS

//	Create a variable called firstVariable.

//	assign it the value of a string, "Hello World"

//	change the value of this variable to a number.

//	store the value of firstVariable into a new variable called secondVariable
 	
//	change the value of secondVariable to a string.

//	What is the value of firstVariable?


const firstVariable = ('Hello World');
console.log (firstVariable)

firstVariable = (2);
const secondVariable = ('firstVariable')

console.log(secondVariable)



//	Create a variable called yourName and set it equal to your name as a string.
// 	Write an expression that takes the string "Hello, my name is " and the variable yourName so that 
//	it returns a new string with them concatenated.
// 	ex: Hello, my name is Jean Valjean

const yourName = ('Raul Torres');
const greeting = ('Hello, my name is ');
return greeting.concat(yourName)
console.log(greeting.concat(yourName)) //why does this log what i need but not return?



//BOOLEANS
// Using the provided variable definitions, replace the blanks with a mathematical or boolean 
// operator that evaluates the expression to true. 👋

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

a < b;
c > d;
'Name' ___ 'Name'; undefined;
a * a === d;
e ='Kevin' (true);
48 ==='48' (false);



// THE FARM 
//	if animal = cow print => "mooooo"
//	else if animal not = cow print => "Hey! You're not a cow."

const cow = "moooo" 
const other = "Hey! You're not a cow."

const animal = () => {
	if (animal === 'cow'){
		console.log(cow);
	}else if(animal === 'other'){
		console.log(other)
	}
}



// DRIVER'S ED
// Write a variable that will hold a person's age.
// Write code that will print out "Here are the keys", if the age is 16 years or older.
// Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."


const dAge = 16

const license = () => {
	if (dAge <= 16){
		console.log("You're too young.");
	} else if (dAge >= 16){
		console.log("Here are the keys");
	}
}



// JUST LOOP IT
// Write code that will print out all the numbers in the range 0 - 10.

for (let i = 0; i < 11; i++) {
	console.log([i]);
}

// Write code that will print out all the numbers in the range 10 - 4000.

for (let i = 10; i < 4000; i++) {
	console.log([i]);
}

// Write code that will print out every other number in the range 10 - 4000.

for (let i = 10; i < 4000; i++) {
	if (i % 2 === 0){
		console.log([i]);
	}
}


// LET'S GET EVEN

// Print out the even numbers that are within the range of 1 - 100.
// Adjust your code to add a message next to the even number that says: "is an even number".

// Example Output:
// 2 is an even number
// 4 is an even number
// 6 is an even number

for (let i = 0; i < 100; i++) {
	if (i % 2 === 0){
		console.log([i] + ' is an even number.');
	}
}


// GIVE ME FIVE
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// Example Output:
// I found a 5. High five!
// I found a 10. High five!

for (let i = 0; i < 100; i++) {
	if (i % 5 === 0){
		console.log('I found a ' + [i] + '. High five!');
	}
}

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// Example Output:
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!

for (let i = 0; i < 100; i++) {
	if (i % 5 === 0){
		console.log('I found a ' + [i] + '. High five!');
	}else if (i % 3 === 0){
		console.log('I found a ' + [i] + '. Three is a crowd')
	}
}


// SAVINGS ACCOUNT 
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your banck_account should have $10,100 in it.


//Part 1
const bankAccount = 0

for (let i = 0; i < 10; i++) {
	bankAccount = bankAccount + i
} console.log(bankAccount)
}

let bankAccount = 0;

for (let i=0; i<=10; i++) {
	bankAccount = bankAccount + i;
}

alert(bankAccount);


//Part 2

let bankAccount = 0;

for (let i=0; i<=100; i++) {
	bankAccount = bankAccount + i * 2;
}

alert(bankAccount);




// MULTIPLES OF 3 AND 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
// 👏 You just solved Project Euler problem 1! 👏


Part One

numbers = 0

for (let i = 0; i < 10; i++) {
	if (i % 3 === 0 || i % 5 === 0){ numbers = numbers + i;
		console.log(numbers);
	}
}

23


Part Two

numbers = 0

for (let i = 0; i <= 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0){ numbers = numbers + i;
		console.log(numbers);
	}
}

233,168

// Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes.

const quotes = []

const arr = ['To be or not to be', 'it aint over til its over', 'I have a dream'];
console.log(quotes.push(arr));


// Given the following array const randomThings = [1, 10, "Hello", true]
// how do you access the 1st element in the array?

const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);

// Change the value of "Hello" to "World".

const randomThings = [1, 10, "Hello", true];
randomThings[2] = 'World';
console.log('randomThings')
// Check the value of the array to make sure it updated the array.



// WE'VE GOT CLASS
// Given the following array 

const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

// What would you write to access the 3rd element of the array?
console.log(ourClass[2])

// Change the value of "Github" to "Octocat"
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
ourClass[2] = 'Octocat';
console.log('ourClass')

// Add a new element, "Cloud City" to the array.
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

ourClass.push('Cloud City')
console.log(ourClass)



// MIX IT UP

// Given the following array const myArray = [5 ,10 ,500, 20]
// using the push method, add the string "Egon" to the end of the array.

const myArray = [5 ,10 ,500, 20]

myArray.push('Egon')
console.log(myArray)


// using a method, remove the string from the end of the array.

const myArray = [5 ,10 ,500, 20, 'Egon']

myArray.splice('Egon', 4);
console.log(myArray)


// using the unshift method, add the string "Bob Marley" to the beginning of the array

const myArray = [5 ,10 ,500, 20]

myArray.unshift('Bob Marley');
console.log(myArray)


// using a different method, remove the string from the beginning of the array
const myArray = ['Bob Marley', 5 ,10 ,500, 20]
myArray.shift();
console.log(myArray)

// .shift()
// .unshift()
// .pop()
// .push()



// use the reverse method on this array
const myArray = [5 ,10 ,500, 20]
myArray.reverse();

console.log(myArray);


// BIGGIE SMALLS

// Write an if..else statement:

if {
	//some code
}else if {
	//some code
}else{
	// some code
}

// console.log little number if the number entered is less than 100

let x = ()
if (x <= 100){
	console.log('little number')
}

// If the number entered is 100 or more, alert big number.

let x = ()
if (x >= 100){
	alert 'big number'
}


// MONKEY IN THE MIDDLE

// Write an if...else if...else statement:

// console.log little number if the number entered is less than 5.

let x = ()
if (x < 10){
	console.log('little number')
}
// If the number entered is more than 10, log big number.

else if (x > 10){
	console.log('big number')
}
// Otherwise, console.log "monkey". 

else (x = 10){console.log('monkey')
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
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence 

console.log("Kristyn is rocking that " + kristynsCloset['2'] + " today!")


// Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
const kristynShoe = []

kristynShoe.push(kristynsCloset.shift([0]))

console.log(kristynShoe)


// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

kristynsCloset.push('raybans')
console.log(kristynsCloset)

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// ?????????????????????????????????????????
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

kristynsCloset.replace('yellow knit hat', 'stained knit hat');
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// ????????????????????????????????????????????
console.log('put on the ' + thomsCloset[0])


// In the same way, access one item from Thom's pants array.

// Access one item from Thom's accessories array.

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.



// FUNCTIONS

// PRINT GREETING

// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

const printGreeting = (hello) => {
	return 'Hello there'
}

console.log(printGreeting('Slimer'))


// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!



// REVERSE WORD ORDER

// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

// console.log(reverseWordOrder("Ishmael me Call"));
// => "Call me Ishmael"
// console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"

const reverseWordOrder = (string) => {
	let reverseString = string.split('').reverse().join('')
return reverseString
}
console.log(reverseWordOrder('Ishmael me Call'))


// CALCULATE

// Write a function called calculate.
const calculate = () => {
	someCode
}
console.log('')

// This function should take three arguments, two numbers and a string.
const calculate = (0, 0, someString) => {
	someCode
}
console.log('')

// Name the parameters num1, num2, and operation.
const calculate = (num1, num2, operation) => {
	someCode
}
console.log('')

// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.
const calculate = (num1, num2, operation) => {
	const add = num1 + num2;
	return add
}
// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.
const calculate = (num1, num2, operation) => {
	const sub = num1 - num2;
	return sub
}

// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

const calculate = (num1, num2, operation) => {
	const mult = num1 * num2;
	return mult
}

const calculate = (num1, num2, operation) => {
	const div = num1 / num2;
	return div
}

const calculate = (num1, num2, operation) => {
	const exp = Math.pow(num1, num2);
	return exp
}




// 1.  Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

const printCool = (name) => { 
	return name + ' is cool'
}

// 2  Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

// console.log(calculateCube(5));
// => 125
const calculateCube = (num1) => {
	const cubed = Math.pow(num1, 3)
	return cubed
}

// 3  Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

// console.log(isAVowel("a"));
// => true
// ????????????????????????????????????????????
const isAVowel = (vowel) => {
	if (vowel === 'a'|| 'e'|| 'i'|| 'o'|| 'u'|| 'y') {
		return 'correct';
	} else {
		return'false';
	}
}



// 4  Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]// 

// ????????????????

const getTwoLengths = (strgA, strgB) => {
	const larry = [strgA.length, strgB.length]
	return larry
}console.log(getTwoLengths(larry);




// 5 Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]
// ????????????????

const getMultipleLengths = (arrayOfStrings) => {
const arrayOfStrings = [arrayOfStrings.length];

	return [arrayOfStrings.length]
}




// 6 Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

// console.log(maxOfThree(6, 9, 1));
// => 9

const maxOfThree = (num1, num2, num3) => {
	for (let i = 0; i > 0; i++) {
		if(i > 0){
			return 
		}
	}
}


// 7  Write a function printLongestWord that accepts a single argument, an array of strings. 
// The method should return the longest word in the array. In case of a tie, the method should 
// return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

const array = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]

const printLongestWord = (arrayOfStrings.length) => {
	for (let i = 0, i > 0; i++) {
		if {
			arrayOfStrings.length
		}
	}
}


// 8  Write a Javascript function called transmogrify. This function should accept three arguments, 
// which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, 
// raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

// console.log(transmogrify(5, 3, 2));

const transmogrify = (num1, num2, num3) => {
const transmogrified = (num1 * num2)Math.exp(num3) => {
	return transmogrified
};
	console.log();
}



// OBJECTS

// Syntax // List and describe each individual piece of syntax that we use to construct an object. 
//Don't leave anything out! The list is finite.

// Example: // {} curly braces define the object.

{} //curly braces define the object.
[] //the object's descriptive details lie within these 
' ' or " " // quotation marks help solidify the string
, // comma separates each string
= // equals signs can be used to signify assignment to variable or to show equalization between values



// ME

// Create an empty object called me.

const me = {['']}
// Assign it properties for name, age, and email with corresponding values.
const me = {name: 'name', age: 'age', email: 'email'}

// The object would look something like this if we console logged it:
// console.log(me) => {name: "Kristyn", age: 98, email: "kristyn@foo.bar"}

// Using dot notation, access the name property in your object.
me.name

// Without writing directly into the object, update the value of age to be 1000 years old.
//??????????????????????

// Using dot notation, verify that age has been updated.
// Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
me["place of residence"]

// Access the value of "place of residence"




// SLIMER

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
// Given the slimer object:
// What would you write to access the name and console.log it?
monster.name //to access
console.log(monster.name)
// What would you write to change the type to 'creature' (without changing it inside the object)
monster.type.push('creature')   //?????????????????????????????
// What would you write to add a key to the object called age, and set the age to 6?
// ???????????????
// console.log the object to make sure type is creature, and age is 6 