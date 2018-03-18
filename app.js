// CONCEPTUAL QUESTIONS
//1. How do we assign a value to a variable?
//<--- To assign a value you a variable, you start with either let or const, add an assignment operator, and then assign your value. Examples:
let favoriteFood = "tacos";
const year = 1989;

//2. How do we change the value of a variable?
//<--- To change the value, you first need to have declared the variable with let. If so, simply type the variables name, include assignment
//<--- operator, and set new value. Example:
favoriteFood = "pad thai";

//3. How do we assign an existing variable to a new variable?
//<--  Declare your new variable with an assignment operator and then list your existing variable. Example:
let favoriteAnimal = "dog";
let myPet = favoriteAnimal;


//STRINGS
//1. Create a variable called firstVariable
let firstVariable;
// 		assign it the value of a string => "Hello World"
firstVariable = "Hello World";
// 		change the value of this variable to a number.
firstVariable = 69;
//		store the value of firstVariable into a new variable called secondVariable
let secondVariable = firstVariable
// 		change the value of secondVariable to a string.
secondVariable = "This is my new string";
// 		What is the value of firstVariable?
firstVariable = 69;

//2. Create a variable called yourName and set it equal to your name as a string
let myName = "Alyssa Graham";
// 		Write an expression that takes the string "Hello, my name is " and the variable yourName so that it 
// 		returns a new string with them concatenated.
console.log("Hello, my name is " + myName);


// BOOLEANS
//1. Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true.
a < b;
c > d;
'Name' === 'Name';
a < b < c;
a != a < d; //AG comment <-- could also do a != a != d
e === 'Kevin';
48 == '48';


// THE FARM
//1. Write code that will print out "mooooo" if the variable animal is equal to cow.
let animal = "cow";

if(animal === "cow") {
	console.log("mooooo")
};

//2. Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."
let animal = "cow";

if(animal === "cow") {
	console.log("mooooo");
}; else {
	"Hey! You're not a cow."
}


//DRIVER'S ED
//1. Write a variable that will hold a person's age.
let age;

//2. Write code that will print out "Here are the keys", if the age is 16 years or older.
if(age <= 16) {
	console.log("Here are the keys.")
}

//3. Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
if(age >= 16) {
	console.log("Here are the keys.");
} else if (age < 16) {
	console.log("Sorry, you're too young.")
}


// JUST LOOP IT
//1. Write code that will print out all the numbers in the range 0 - 10.
for(i = 0; i <= 10; i++) {
	console.log(i)
}

//2. Write code that will print out all the numbers in the range 10 - 4000.
for(i = 10; i <= 4000; i++) {
	console.log(i)
}

//3. Write code that will print out every other number in the range 10 - 4000.
for(i = 10; i <= 4000; i++) {
	if((i % 2) == 0) {
		console.log(i)
	}
}


// LET'S GET EVEN
//1. Print out the even numbers that are within the range of 1 - 100.
for(i = 1; i <= 100; i++) {
	if((i % 2) == 0) {
		console.log(i)
	}
}

//2. Adjust your code to add a message next to the even number that says: "is an even number".
for(i = 1; i <= 100; i++) {
	if((i % 2) == 0) {
		console.log(i + " is an even number")
	}
}


// GIVE ME FIVE
//1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
for(i = 0; i <= 100; i++) {
	if((i % 5) == 0) {
		console.log("I found a " + i + ". High five!")
	}
}

//2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
for(i = 0; i <= 100; i++) {
	if((i % 5) == 0) {
		console.log("I found a " + i + ". High five!");
	} else if((i % 3) == 0) {
		console.log("I found a " + i + ". Three is a crowd.")
	}
}


// SAVINGS ACCOUNT
//1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// let bank_account = 0;

for(bank_account = 0; bank_account <= 55; bank_account++) {
	console.log(bank_account += 1)
}

//2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers 
//between 1 - 100 multiplied by 2.
let bank_account = 0;

for(bank_account = 0; bank_account <= 10100; bank_account++) {
	console.log(bank_account += 1)
}


// MULTIPLES OF 3 AND 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// find all the multiples of 3 and 5
// let multipleOfThree = [].reduce(add, 0);
// let multipleOfFive = []. reduce(add, 0);

// for(i = 0; i <= 1000; i++) {
// 	if((i % 5) == 0) {
// 		multipleOfFive.push(i++);
// 	} else if((i % 3) == 0) {
// 		multipleOfThree.push(i++)
// 	}

// 	const sum = (a, b) => {
// 		a + b
// 	}
// 	const sum = multipleOfThree.reduce(add)

// }

//create a variable to store multiples of 3

//create a variable to store multiples of 5

// add the two variables together

// Possible solution? // let sum = 0;
// for (i = 1; i < 1000; i++){
// 	if(i % 3 === 0 || i % 5 === 0){
// 		console.log(sum += i)
// 	}
// }


// EASY DOES IT
//.1 Create an array that contains three quotes and store it in a variable called quotes.
let quotes = ["Use the Force"], ["I've got a bad feeling about this"], ["Do or do not. There is not try"]


// RANDOM
const randomThings = [1, 10, "Hello", true]
//1. How do you access the 1st element in the array?
randomThings[0];

//2. Change the value of "Hello" to "World".
randomThings[2] = "World";

//3. Check the value of the array to make sure it updated the array.
console.log(randomThings) //<-- result: [1, 10, "World", true]


//WE'VE GOT CLASS
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
//1. What would you write to access the 3rd element of the array?
ourClass[2]

//2. Change the value of "Github" to "Octocat"
ourClass[2] = "Octocat";

//3. Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");


// MIX IT UP
const myArray = [5 ,10 ,500, 20]

//5. using the push method, add the string "Egon" to the end of the array.
myArray.push("Egon");

//6. using a method, remove the string from the end of the array
myArray.pop();

//7. using the unshift method, add the string "Bob Marley" to the beginning of the array
myArray.unshift("Bob Marley");

//8. using a different method, remove the string from the beginning of the array
myArray.splice(0,1);

//9. use the reverse method on this array
myArray.reverse();


// BIGGIE SMALLS - write an if..else statement:
//1. console.log little number if the number is entered is less than 100
//2. If the number entered is 100 or more, alert big number.
num = 5;

if(num < 100) {
	console.log("little number")
} else {
	console.log("big number")
}


// MONKEY IN THE MIDDLE - write an if...else if...else statement:
// 1. console.log little number if the number entered is less than 5.
// 2. If the number entered is more than 10, log big number.
// 3. Otherwise, console.log "monkey". 
num = 8;

if(num < 5) {
	console.log("little number")
} else if(num > 10) {
	console.log("big number")
} else {
	console.log("monkey")
}


// WHAT'S IN YOUR CLOSET?
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

//1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
//log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

//2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
kristynsCloset.splice(0,1);
let kristynShoe = "left shoe";

//3. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(5, 0, "raybans");

//4. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[4] = "stained knit hat";

//5. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
thomsCloset[0][0]; //<-- result: "grey button-up"

//6. In the same way, access one item from Thom's pants array.
thomsCloset[1][1]; //<-- result: "jeans"

//7. Access one item from Thom's accessories array.
thomsCloset[2][1];

//8. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!")

//9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas"


// FUNCTIONS
// printGreeting
const printGreeting = (name) => {
	return ("Hello there, " + name + "!")
}

//reverseWordOrder
 const reverseWordOrder = (input) => {
	let newString = input.split(" ");
	let reversedString = "";
	for(i = 0; i < newString.length; i++) {
		reversedString = newString[i] + " " + reversedString
	}
	finalString = reversedString.slice(0, reversedString.length - 1)
	return finalString
}

// calculate
const calculate = (num1, num2, operation) => {
	if(operation === "add") {
		return num1 + num2;
	} else if(operation === "sub") {
		return num1 - num2;
	} else if(operation === "mult") {
		return num1 * num2;
	} else if(operation === "div") {
		return num1 / num2;
	} else if(operation === "exp") {
		return Math.pow(num1, num2);
	} else {
		return "Sorry, that's not an operation."
	}
}

//1.
const printCool = (name) => {
	return name + " is cool."
}

//2.
const calculateCube = (num) => {
	return (num * num * num)
}

//3.
const isAVowel = (letter) => {
	const lowerLetter = letter.toLowerCase();
	if(lowerLetter === "a" || lowerLetter === "i" || lowerLetter === "o" || lowerLetter	=== "u") {
		return true
	} else {
		return false
	}
}

//4.
let lengths = [];
const getTwoLengths = (s1, s2) => {
	lengths[0] = s1.length;
	lengths[1] = s2.length;

	return lengths;
}

//5.
const getMultipleLengths = (arrayOfStrings) => {
	//need function to create a new array
	const arrOfLengths = [];
	//loop through the arrayOfStrings and push each 
	for(let i = 0; i < arrayOfStrings.length; i++) {
		arrOfLengths.push(arrayOfStrings[i].length)
	}
	return arrOfLengths;
}

//6.
const maxOfThree = (num1, num2, num3) => {
	const largestNum = Math.max(num1, num2, num3)
	return largestNum

}

//7. 
const printLongestWord = (arrOfStrings) => {
	let lgth = 0;
	let longestString = "";

	for (let i = 0; i < arrOfStrings.length; i++) {
		if(arrOfStrings[i].length > lgth) {
			lgth = arrOfStrings[i].length;
			longestString = arrOfStrings[i]
		}
		
	} return longestString
}

//8.
const transmogrify = (n1, n2, n3) => {
	newNum = n1 * n2;
	return Math.pow(newNum, n3)
}


//OBJECTS
// List and describe each individual piece of syntax that we use to construct an object. 
// Don't leave anything out! The list is finite.
//<--- To construct an object, first declare with either let or const followed by the name of the objects. 
//<--- next list the assignment operator followed by curly braces. The curly braces are used to list the properties of the
//<--- objects, or defines the objects. List the key-value pairs to describe the object. A comma follows each key-value pair,
//<--- except for the last property listed.
let myObject = {
	color: "blue",
	size: "big",
	height: "tall",
	age: 45
}

// Me
//1. & 2. Create an empy object called me and Assign it properties for name, age, and email with corresponding values.
const me = {
	name: "Kristyn",
	age: 98,
	email: "kristyn@foo.bar"
}

//3. Using dot notation, access the name property in your object.
me.name; //<--- returns "Kristyn"

//4. Without writing directly into the object, update the value of age to be 1000 years old.
me.age = 1000;

//5. Using dot notation, verify that age has been updated.
me.age; //<--- returns 1000

//6. 
me["place of residence"] = "Bloomington";

//7. 
me["place of residence"]; //<--- returns "Bloomington"


//Slimer
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
// Given the slimer object:
// 		What would you write to access the name and console.log it?
console.log(monster.name)

// 		What would you write to change the type to 'creature' (without changing it inside the object)
monster.type = "creature";

// 		What would you write to add a key to the object called age, and set the age to 6?
monster.age = 6;

// 		console.log the object to make sure type is creature, and age is 6
console.log(monster.type) //<--- returns "creature"
console.log(monster.age) //<--- returns 6


//Ogres
// How would you model your adventurer? Your adventurer will want a name and hitpoints. 
// What else would your adventurer need?
const adventurer = {
	name: "Russell",
	hitpoints: 160,
	age: 25,
	belongings: "shield", "sword", "canteen"
}

// How would you model an ogre? Your ogre will want hitpoints.
const ogre = {
	hitpoints: 200,
	color: "greenish",
	belongings: "club",
	type: "mean"
}

// Write a very small program that will simulate a battle between your adventurer and an ogre. 
// You can use the same techniques you used in your landscaping game from the weekend.
// When your adventurer's hitpoints reach 0 the game is over.
// When your ogre's hitpoints reach 0 the game is over.



// EXTRA STUFF
//1. Mama cat
const cat1 = {
	name: "Brady",
	breed: "bengal",
	age: 5
}

// console.log the cat's age
console.log(cat1.age)

// // console.log the cat's breed
console.log(cat1.breed)

//2. Papa cat
// Define an object called cat2 that also contains the properties: name, breed, age (a number)
const cat2 = {
	name: "Tom",
	breed: "tabby",
	age: 6, 
}

//3. Combine Cats!
// Write a function combineCats that has two parameters mama, and papa. 
// The function will take two arguments -- each a cat object.

const combineCats = (cat1, cat2) => {
	const cat3 = {};
	cat3.name = cat2.name + " " + cat1.name
	cat3.age = 1
	cat3.breed = cat1.breed + "-" + cat2.breed
	return cat3
}




















