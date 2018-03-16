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
// 1. Create a variable called firstVariable
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

// 2. Create a variable called yourName and set it equal to your name as a string
let myName = "Alyssa Graham";
// 		Write an expression that takes the string "Hello, my name is " and the variable yourName so that it 
// 		returns a new string with them concatenated.
console.log("Hello, my name is " + myName);


// BOOLEANS
// Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true.
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
	console.log("mooooo")
}; else {
	"Hey! You're not a cow."
}


//DRIVER'S ED
// 1. Write a variable that will hold a person's age.
let age;

// 2. Write code that will print out "Here are the keys", if the age is 16 years or older.
if(age <= 16) {
	console.log("Here are the keys.")
}

// 3. Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
if(age >= 16) {
	console.log("Here are the keys.")
} else if (age < 16) {
	console.log("Sorry, you're too young.")
}








