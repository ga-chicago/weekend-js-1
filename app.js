// CONCEPTUAL QUESTIONS
//1. How do we assign a value to a variable?
//<--- To assign a value you a variable, you start with either let or const, add an assignment operator, and then assign your value. Examples:
let favoriteFood = "tacos";
const year = 1989;

//2. How do we change the value of a variable?
//<--- To change the value, you first need to have declared the variable with let. If so, simply type the variables name, include assignment
//<---  operator, and set new value. Example:
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

// for(bank_account = 0; bank_account <= 55; bank_account++) {
// 	console.log(bank_account += 1)
// }

// //2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers 
// //between 1 - 100 multiplied by 2.
// let bank_account = 0;

// for(bank_account = 0; bank_account <= 10100; bank_account++) {
// 	console.log(bank_account += 1)
// }


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



















