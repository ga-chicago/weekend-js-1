// Conceptual Questions
// How do we assign a value to a variable?
// By using 'const' or 'let'
// How do we change the value of a variable?
///We cannot redfine 'const' so in this case, use 'let' instead
// for example: let b = 'apples';
// b = 'oranges'
// How do we assign an existing variable to a new variable?
//

// // Strings
// // Create a variable called firstVariable.
// const firstVariable = "string";
//
// // assign it the value of a string => "Hello World"
//
//
// // change the value of this variable to a number.
// firstVariable(3)
//
// // store the value of firstVariable into a new variable called secondVariable
// const secondVariable = firstVariable
//
// // change the value of secondVariable to a string.
// secondVariable(firstVariable += "")
// // What is the value of firstVariable?
// "3"

// Create a variable called yourName and set it equal to your name as a string.
// Write an expression that takes the string "Hello, my name is "
// and the variable yourName so that it
// returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
const yourName = (name) => {
  return ("Hello, my name is " + " " + name);
}
yourName("Zoe")

//Booleans//
// Using the provided variable definitions, replace the blanks with
// a mathematical or boolean operator that evaluates the expression to true.
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
a < b;
c > d;
'Name' ==='Name';
a < b < c;
a < a < d;
e === 'Kevin';
48 !=='48';

//The Farm
// Write code that will print out "mooooo"
// if the variable animal is equal to cow.
const animalSound = (animal) => {
return ("moooo");
}
animalSound("cow")

// Change your code so that if the variable animal is anything other than a cow,
// your code should print out "Hey! You're not a cow."
const animalSound = (animal) => {
  if(animal === 'cow') {
    return ("moooo");
    console.log("mooooo");
  } else {
    console.log("Hey! You're not a cow!");
  }
}
animalSound("cow")
animalSound("chicken")

//Driver's Ed
//Write a variable that will hold a person's age.
const age = (num) => {
// Write code that will print out "Here are the keys",
// if the age is 16 years or older.
  if(num >= 16) {
    console.log("Here are the keys");
  }
// Change your code so that if the age is younger than 16,
// a message will print "Sorry, you're too young."
else {
  console.log("Sorry, you're too young.");
  }
}

// Just Loop It
// Write code that will print out all the numbers in the range 0 - 10.
for(let i = 0; i <= 10; i++) {
  console.log([i]);
}
// Write code that will print out all the numbers in the range 10 - 4000.
for(let i = 10; i <= 4000; i++) {
  console.log([i]);
}
// Write code that will print out every other number in the range 10 - 4000.
for(let i = 10; i <= 4000; i++) {
  if([i] % 2 === 0) {
    console.log([i]);
  } else{

  }
}

// Give me Five//
// For the numbers 0 - 100, print out "I found a number. High five!"
// if the number is a multiple of five.

for(let i = 1; i <= 100; i++) {
  if([i] % 5 === 0){
    console.log("I found a " + [i] + "." + " High five!");
  // Add to the code from above to print out "I found a number. Three is a crowd"
  // if the number is a multiple of three.
} else if([i] % 3 === 0) {
  console.log("I found a " + [i] + "." + " Three is a crowd.");
}
}


//Savings account// UNFINISHED
// Write code that will save the sum of all the numbers
// between 1 - 10 to a variable called bank_account.

// const bankAccount = (num) => {
//   for(i = 0; i <= 10; i++){
//
//   }
// }

//Multiples of 3 & 5// NOT FINISHED
// const sum = (arr) => {
// for (let i = 0; i <= 10; i++) {
//   if([i] % 5 === 0) {
//     //RETURN SOMETHING?
//     return [i]
//   } else if([i] % 3 === 0) {
//     return [i]
//   } else {
//   }
// }
// const arrSum = sum => {
//
// }

//const arrSum = arr => arr.reduce((a,b) => a + b, 0)

// Easy Does It
// Create an array that contains three quotes and store it
// in a variable called quotes.
const quotes = ["", "", ""]

// Given the following array
const randomThings = [1, 10, "Hello", true]
// how do you access the 1st element in the array?
randomThings[1]
// Change the value of "Hello" to "World".
randomThings[2] = "World"
// Check the value of the array to make sure it updated the array.
