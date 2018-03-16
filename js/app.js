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

// We've Got Class
// Given the following array
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
// What would you write to access the 3rd element of the array?
ourClass[3]
// Change the value of "Github" to "Octocat"
ourClass[2] = "Octocat"
// Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City")


// Given the following array
const myArray = [5 ,10 ,500, 20]
// using the push method, add the string "Egon" to the end of the array.
myArray.push("Egon")
// using a method, remove the string from the end of the array.
myArray.pop("")
// using the unshift method, add the string "Bob Marley" to the beginning of the array
myArray.unshift("Bob Marley")
// using a different method, remove the string from the beginning of the array
myArray.shift("")
// use the reverse method on this array
myArray.reverse("")

// Biggie Smalls
// Write an if..else statement:
// console.log little number if the number is entered is less than 100
// If the number entered is 100 or more, alert big number.
const biggieSmalls = (num) => {
  if(num < 100) {
  console.log("little number");
    } else {
  console.log("big number");
  }
}

// Monkey in the Middle
// Write an if...else if...else statement:
// console.log little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, console.log "monkey".

const monkeyInMiddle = (num) => {
  if(num < 5) {
    console.log("little number");
  } else if(num > 10) {
    console.log("big number");
  } else {
    console.log("monkey");
  }
}

//What's in Your CLoset??//

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
    // These are Thom's shirts (an array)
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
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset,
// log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
kristynsCloset.shift([0])
let kristynShoe = "left shoe"

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(4, 0, "raybans")

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

kristynsCloset[4] = "stained yellow hat"


// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
const shirts = thomsCloset[0][0]
// In the same way, access one item from Thom's pants array.
const pants = thomsCloset[1][1]
// Access one item from Thom's accessories array.
const extras = thomsCloset[2][2]
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + shirts + ", "  + pants + ", " + extras + " !");
// Get more specific about what kind of PJs Thom's wearing this winter.
//Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "footie pajamas"


//~*~*~*~*~FUNCTIONS*~*~*~*~
//Print greeting
//Write a function called printGreeting with a parameter name that returns
//a greeting with the argument interpolated into the greeting.
const printGreeting = (name) => {
  return "Hello there, " + name + "!";
}
console.log(printGreeting("Slimer"));


//reverseWordOrder
//Write a function reverseWordOrder that accepts a single argument, a string.
//The function should return a string with the order of the words reversed.
//Don't worry about punctuation.
const reverseWordOrder = (str) => {
  const splitString = str.split(" ");
  const reverseArray = splitString.reverse();
  return joinedArray = reverseArray.join(" ");
}
console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));

// calculate
// Write a function called calculate.
// This function should take three arguments, two numbers and a string.

// Name the parameters num1, num2, and operation.
const calculate = (num1, num2, "operation") => {
// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.
if(operation === "add") {
  return num1 + num2
// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.
} else if(operation === "sub") {
  return num1 - num2
// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).
} else if(operation === "mult") {
  return num1 * num2
} else if(operation === "div") {
  return num1 / num2
} else if(operation === "exp") {
  return num1**num2
} else  {
  }
}

console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "exp"));


//Write a function printCool that accepts one parameter, name as an argument.
//The function should print the name and a message saying that that person is cool.
const printCool = (name) => {
  return name + " is cool."
console.log(printCool("pizza"));


//Write a function calculateCube that takes a single number
//and prints the volume of a cube made from that number.
