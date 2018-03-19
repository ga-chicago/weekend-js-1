// Weekend One Homeworks

// Conceptual Questions
// How do we assign a value to a variable?

let myName = "Sam"

// How do we change the value of a variable?

myName = "Bob"

// How do we assign an existing variable to a new variable?

let newName = name;

// Strings
// Create a variable called firstVariable.

let firstVariable

// assign it the value of a string => "Hello World"

let firstVariable = "Hello World"

// change the value of this variable to a number.

firstVariable = 8;

// store the value of firstVariable into a new variable called secondVariable


let secondVariable = firstVariable;


// change the value of secondVariable to a string.

secondVariable = "this is a string";

// What is the value of firstVariable?

"this is a string"

// Create a variable called yourName and set it equal to your name as a string.

let myName = "Sam"

// Write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.

console.log("Hello, my name is " + myName);

// Booleans
// Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true. 👋
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
	a !=  b;
	c > d;
	"Name"  ===  "Name";
	a + b === c;
	a * a === d;
	e === "Kevin";
	48 == '48';

// The Farm
// Write code that will print out "mooooo" if the variable animal is equal to cow.

// Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."

let animal = "cow"
		
		if (animal === "cow") {
		console.log("mooooooo")
	} 	else {
		console.log("Hey! You're not a cow.")
	}
// Driver's Ed
// Write a variable that will hold a person's age.

// Write code that will print out "Here are the keys", if the age is 16 years or older.

// Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."


let age = 14;

	if(age >= 16) {
		console.log("Here are the keys");
	} else {
		console.log("Sorry, you're too young.");
	}

// Just Loop It
// Write code that will print out all the numbers in the range 0 - 10.

	for(i = 0; i <= 10; i++)
		console.log([i])

// Write code that will print out all the numbers in the range 10 - 4000.

	for(i = 10; i <= 4000; i++)
		console.log([i])	

// Write code that will print out every other number in the range 10 - 4000.

	for(i = 10; i <= 4000; i++)
		if(i % 2 === 0)
		console.log([i]) // prints out all even numbers 

 


// Let's get even
// Print out the even numbers that are within the range of 1 - 100.

// Adjust your code to add a message next to the even number that says: "is an even number".

// Example Output:

// 2 is an even number
// 4 is an even number
// 6 is an even number

for(i = 1; i <= 100; i++)
		if(i % 2 === 0)
		console.log([i + " is an even number "])	
		
		
// Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// Example Output:

// I found a 5. High five!
// I found a 10. High five!

for(i = 0; i <= 100; i++)
		if(i % 5 === 0) {
		console.log("I Found a " + i + "." + " High five!")
		} else {
		console.log([i])	
		}
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!

for(i = 0; i <= 100; i++)
		if(i % 5 === 0) {
		console.log("I Found a " + i + "." + " High five!")
		} else if(i % 3 === 0) {
		console.log("i Found a " + i + "." + " Three is a crowd")
		} else {
		console.log([i])
		}



// Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

// Check your work! Your banck_account should have $55 in it.


let bankAccount = 0;

for(i = 1; i <= 10; i++) {
	console.log([i])
	console.log(bankAccount += i)

}

console.log(bankAccount); 



// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your banck_account should have $10,100 in it.

let bankAccount = 0;

for(i = 1; i <= 100; i++) {
	// console.log([i])
	console.log(bankAccount += (i * 2)) // sum of all the numbers between 1 - 100 multiplied by 2.

}

console.log(bankAccount);

//



If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

// 👏 You just solved Project Euler problem 1! 👏

let sum = 0; 
// let answer = []; don't need to push to an array

for(i = 0; i <= 1000; i++) { // looping through all the numbers 0 - 1000
	if(i % 5 === 0 || i % 3 === 0) {
		// console.log(answer.push(i)) // dont need this line of code 
		console.log(sum += i)

}

console.log(sum); //  234168 



// Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes.

let quotes = ["Hello","Whats", "Up"]


// Random
// Given the following array const randomThings = [1, 10, "Hello", true]

// how do you access the 1st element in the array?

randomThings[0]

// Change the value of "Hello" to "World".

randomThings[2] = "New"


// Check the value of the array to make sure it updated the array.

randomThings;

[1, 10, "New", true]


// We've Got Class
// Given the following array const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

// What would you write to access the 3rd element of the array?

ourClass[2]

// Change the value of "Github" to "Octocat"

ourClass[2] = "Octocar";

["Gizmo", "Zoom", "Octocar", "Slack"]

// Add a new element, "Cloud City" to the array.

ourClass.push("Cloud City");


// Mix It Up
// Given the following array const myArray = [5 ,10 ,500, 20]

// using the push method, add the string "Egon" to the end of the array.

myArray.push("Egon");

(5) [5, 10, 500, 20, "Egon"]

// using a method, remove the string from the end of the array

myArray.pop("Egon");

[5, 10, 500, 20]

// using the unshift method, add the string "Bob Marley" to the beginning of the array

myArray.unshift("Bob Marley");

["Bob Marley", 5, 10, 500, 20]

// using a different method, remove the string from the beginning of the array

myArray.shift();

[5, 10, 500, 20]

// use the reverse method on this array

myArray.reverse();

[20, 500, 10, 5]


//


// Write an if..else statement:

// console.log little number if the number is entered is less than 100

// If the number entered is 100 or more, alert big number


let number = 99

	if(number < 100) {
		console.log("little number")
} 	else {
		console.log("alert big number")
}


// Monkey in the Middle
// Write an if...else if...else statement:

// console.log little number if the number entered is less than 5.

// If the number entered is more than 10, log big number.

// Otherwise, console.log "monkey". 


let number = 7


	if (number < 5) {
		console.log("little number")
}	else if(number > 10) {
		console.log("alert big number")
}   else {
	console.log("monkey")


}

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

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

kristynsCloset[2]

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!" )

// Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.

kristynsCloset.shift();

const kristynShoe = "left shoe";


// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

kristynsCloset.splice(5, 0, "raybans");

		// not adding to last item in array, adding after yellow knit hat 

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

kristynsCloset[4] = "stained knit hat";

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

thomsCloset[0][0];

// In the same way, access one item from Thom's pants array.

thomsCloset[1][1];

// Access one item from Thom's accessories array.

thomsCloset[2][1];

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1])

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = "Footie Pajams"


// printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!


const printGreeting = (name) => {
	return "Hello There, " + name 
}

printGreeting("Slimer");



// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.


const reverseWordOrder = (str) => {
	let splitStr = str.split(" ")
	return splitStr.reverse().join(" ")

}
reverseWordOrder("Ishmael, me, Call"); 

//  calculate
// Write a function called calculate.

// This function should take three arguments, two numbers and a string.

// Name the parameters num1, num2, and operation.

// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

const calculate = (num1, num2, operation) => {
	if (operation === "add") {
		return num1 + num2
	} else if (operation === "sub") {
		return num1 - num2 
	} else if (operation === "mult") {
		return num1 * num2
	} else if (operation === "div") {
		return num1 / num2
	} else (operation === "exp") 
		return num1 ^ num2 
	

}

calculate(4, 5, "add") // works 


// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

const printCool = (name) => {
	return(name + " is cool ")

}

printCool("Sam")



// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = (num) => {
	return num * num * num;
}

calculateCube(5)



// Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

const isAVowel = (letter) => {
	if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
		return true 
	} else if (letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U"){
		return true  
	} else {
		return false
	}

}

isAVowel("A")  // Not sure this is the BEST way to do it. 


// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

	
const getTwoLengths = (a, b) => {
	console.log(a.length, b.length)

}

console.log(getTwoLengths("Hank","Hippopopalous"));  // When I used return it only showed length of second value


// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]


const getMultipleLengths = (array) => {
	let newArray = [];  // new array that will contine length of the words 
	for(let i = 0; i < array.length; i++) { // looping through length of words
		newArray.push(array[i].length); 
	}

	return newArray;
} 



console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

// console.log(maxOfThree(6, 9, 1));
// => 9


const maxOfThree = (a, b, c) => {
	return Math.max(a, b, c)
}

maxOfThree(1, 2, 12)



// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// // => "Peanutbutter"

const printLongestWord = (array) => {
	let long = 0;

	let longest = "";

	for(let i = 0; i < array.length; i++) 
		if(array[i].length > long) {
		console.log(array[i].length)
		let = array[i].length;
		longest = array[i]	// this is showing LAST strong not longest
		}

	console.log(longest)	
	return longest;	

}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// this return LAST string // NEED HELP WITH THIS 



// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

// console.log(transmogrify(5, 3, 2));

const transmogrifier = (num1, num2, num3) => {
	let message = Math.pow((num1*num2), num3); // function that raises to the num3 power

	// The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.

	return message; 


}

transmogrifier(5,3,2); // 225

// Objects
// Syntax
// List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.

// Example:


// {} curly braces define the object.

Objects have has methods and properties

the {} define the object.

var person = {firstName:"Sam", lastName:"Mintz", age:25, eyeColor:"brown"};

The properties in an object would be would be firstName, lastName & eyeColor

the value of the properties would be "Sam", "Mintz", "brown"

Methods are actions that can be performed on objects

you can access the first name property in the person object by person.firstName; 	



// Create an empty object called me.
// Assign it properties for name, age, and email with corresponding values.
// The object would look something like this if we console logged it:

// console.log(me)

var me = {
	name: "Sam",
	age: 25,
	email: "Sammintz1993@gmail.com"
}

console.log(me)

{name: "Sam", age: 25, email: "Sammintz1993@gmail.com"}


// Using dot notation, access the name property in your object.

me.name

// Without writing directly into the object, update the value of age to be 1000 years old.

me.age = 100;


// Using dot notation, verify that age has been updated.

me.age 

100

// Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.

me["place of residence"] = "Chicago"


// Access the value of "place of residence"

me["place of residence"];

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
// Given the slimer object:
// What would you write to access the name and console.log it?
monster.name

console.log(monster.name);

// What would you write to change the type to 'creature' (without changing it inside the object)

monster.type = "creature"

// What would you write to add a key to the object called age, and set the age to 6?

monster.age = 6;

// console.log the object to make sure type is creature, and age is 6

console.log(monster.age)


// Ogres
// Let's say you want to make an adventure game where you are an adventurer and you are going to fight ogres.

// Using objects, create models and have them interact.

// how would you model your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?

// how would you model an ogre? Your ogre will want hitpoints.

// Write a very small program that will simulate a battle between your adventurer and an ogre. You can use the same techniques you used in your landscaping game from the weekend.

// When your adventurer's hitpoints reach 0 the game is over.
// When your ogre's hitpoints reach 0 the game is over.
// If you want to provide input to the game, you can run it in the Chrome console (but that isn't strictly necessary for now).


const game = {
	adventurer: {name: "Sam",
				age: 25,
				weight: 180,
				weapons: ["stick", "knife", "bow and arrow", "sheild"],
				hitpoints: ["head", "chest", "legs"],
				health: 100		

			},	

	ogre: {name: "Dennis",
			weight: 385,
			color: "green",
			weapons: ["club", "knife", "ax"],
			hitpoints: ["head", "chest", "legs"],
			health: 100,

		}
}



// I am not sure this is what you are looking for. I have set up my adventurer and agre.

// The fight  

Using the bow and arrow Sam shoots the ogre in the chest bringing his health to 65 

game.adventurer.weapons[2] // brings up the bow and arrow 

game.orge.health = 65;

// Using the club, the agre hits sam and brings his health downto 45

game.adventurer.weapons[0]

game.adventurer.health = 45;

// using the ax the orge tries to hit Sam but its him in a non hitpoint, the arm.

game.adventurer.weapons[2]

// Using the knife, Sam stabs the ogre in the head bringing health to 0

game.adventurer.weapons[1]

game.orge.health = 0;

// Fairly confident this isnt what you guys were looking for but I wanted to try something. Here I am just interating through my object as the values are needed for the fights








// EXTRA STUFF

// Cat Combinator
// 1. Mama cat
// Define an object called cat1 that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age

// console.log the cat's breed


const cat1 = {
	name: "Bob",
	breed: "persian",
	age: 4
}

// cat1.name;

// cat1.breed;

const cat2 = {
	name: "Joe",
	breed: "persian",
	age: 8
}

const combineCats = (mama, papa) => {

console.log(mama, papa)

// return (mama, papa)




}

combineCats(cat1, cat2)

// need to define OUTSIDE of function I believe for this to work // Works as is


// Make it so the combineCats function will return a combination of the two incoming cats
// The result should be an object wherein the
// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between


cat1.name + cat2.name 

age = 1

cat1.breed + "-" + cat2.breed



const cat1 = {
	name: "Bob",
	breed: "persian",
	age: 4
}



const cat2 = {
	name: "Joe",
	breed: "persian",
	age: 8
}

let newName = {cat1.name + cat2.name}

const combineCats = (mama, papa) => {

let newName = cat1.name + cat2.name




}

combineCats({cat1.name + cat2.name})


// Could not get this to work. Need to figure out 


// EXTRA PRACTICE FROM CLASS 

world-object-accessing


const world = {
  places: {
    northAmerica: ["US", "Canada"],
    australia: ["Auckland", "Boomerang"]
  },
  poets: [
    {
      ezraPound: ["the cantos", 'in a station of the metro'],
      alive: false,
    },
    {
      blake: ['The lily', 'sunflower', 'echoing green', 'lost little girl', 'lost boy'],
      alive: false
    },
    {
      whitman: ['Stranger', 'beginners', 'I hear america singing'],
      alive: false
    }
  ],
  food: [
    {
      bbq: {
        pappys: ['smoked meat', 'pulled pork', 'ribs'],
        rogers: ['mmmm i like food', ' yayyaa thats tasty']
      },
      italian: {
        sinatras: ['my way', 'fly me to the moon', 'singing in the rain'],
        tuscany: ['wine', 'berries', 'bread', 'cheese']
      }
    },
    {
      japanese: {
        ramen: ['tonkotsu', 'egg', 'pork', 'chicken Broth'],
      }
    },
    {
      clothes: {
      pajamas: ["nothing", 'long underwear', 't-shirt'],
      formal: ['tuxedo', {suit1: 'blue', suit2: 'turqoise'}]
    }
  }

  ]
}
// print turqoise

world.food[2].clothes.formal[1].suit2;

// print singing in the rain

world.food[0].italian.sinatras[2];

// print sunflower

world.poets[1].blake[1];

// print boomerang

world.places.australia[1];

// print beginners

world.poets[2].whitman[1];




