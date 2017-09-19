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
????????????????????????????????????????????????????????

//	if animal = cow print => "mooooo"

//	else if animal not = cow print => "Hey! You're not a cow."

const cow = 'moooo' 

const animal = () => {
	if (cow === 'cow'){
		console.log(cow);
	} else if (cow !== 'cow'){
		console.log("Hey, you're not a cow.");
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
????????????????????????????????????????????????????????
// Create an array that contains three quotes and store it in a variable called quotes.

const quotes = {}

const arr = {'To be or not to be', 'it aint over til its over', 'I have a dream'};
console.log([0].concat(arr))


// Given the following array const randomThings = [1, 10, "Hello", true]
// how do you access the 1st element in the array?
// Change the value of "Hello" to "World".
// Check the value of the array to make sure it updated the array.

const randomThings = [1, 10, "Hello", true];

for (var i = 0; i >= 0; i++) {
	Things[i]		
}

