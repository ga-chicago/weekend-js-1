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
		console.log([i])	// FIX THIS FIX THIS FIX THIS // WHAT DOES THIS MEAN

 


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

