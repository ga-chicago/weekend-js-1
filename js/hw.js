///////////////		Conceptual Questions		/////////////////////////

// 1. How do we assign a value to a variable?

	// we assing values to a variable using the equal sign (=);
	// var someVariable = 5;

// 2. How do we change the value of a variable?

	// we call the same variable and we assign the new value.
	// var someVariable = 5;
	// someVariable = 'someOtherValue';

// 3. How do we assign an existing variable to a new variable?

	// someVariable = 5;
	// var newVariable = someVariable

/////////////		STRINGS			/////////////////////////

////////	1.		/////////////

var firstVariable = 'Hello World';

firstVariable = 2018

var secondVariable = firstVariable

secondVariable = 'GA'

console.log(firstVariable)
/////	2018	//////


////////	2.		/////////////


const yourName = 'Irwin Marcano';
console.log('Hello, my name is ' + yourName)



/////////////		BOOLEANS			/////////////////////////

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';


a < b;

c > d;

'Name' === 'Name';

a < b < c;

a * a == d;

e == 'Kevin';

48 == '48';


/////////////		THE FARM			/////////////////////////


function cowSound(animal) {
	if (animal === 'cow') {
		return 'moooooo'
	} else {
		return "Hey! You're not a cow."
	}
}

var animal = 'cow';
console.log(cowSound(animal))

animal = 'dog';
console.log(cowSound(animal))

/////////////		DRIVER'S ED			/////////////////////////

var age = 0;

function checkAge(age) {
	if (age >= 16) {
		return 'Here are the keys'
	} else {
		return "Sorry, you're to young to drive"
	}
}
console.log(checkAge(10))


/////////////		JUST lOOP IT			/////////////////////////
//  1. Write code that will print out all the numbers in the range 0 - 10.


for (let i = 0; i <= 10; i++) {
	console.log(i)
}

// 2. Write code that will print out all the numbers in the range 10 - 4000.

for (let i = 10; i <= 4000; i++) {
	console.log(i)
}

// 3. Write code that will print out every other number in the range 10 - 4000.

for (let i = 10; i <= 4000; i++) {
	if (i % 2 == 0) {
		console.log(i)
	}
}


// function rangeNumbers(startNum, finishNum) {
	// for (let i = startNum; i <= finishNum; i++) {
		// console.log(i)
	// }
// }
// 
// rangeNumbers(0, 10)


/////////////		LET'S GET EVEN			/////////////////////////


for (let i = 1; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log(i + ' is a even number')
	}
}


/////////////		GIVE ME FIVE			/////////////////////////


for (let i = 1; i <= 100 ; i++) {
	if (i % 5 == 0) {
		console.log('I found a ' + i + '. High five!')
	}
}
//

for (let i = 1; i <= 100 ; i++) {
	if (i % 5 == 0) {
		console.log('I found a ' + i + '. High five!')
	} else if (i % 3 == 0) {
		console.log('I found a ' + i + '. Three is a crowd')
	}
}



/////////////		SAVING ACCOUNT			/////////////////////////

var bank_account = 0

for (let i = 1; i <= 10; i++) {
	bank_account += i
}
console.log(bank_account);

//

var bank_account = 0

for (let i = 1; i <= 100; i++) {
	bank_account += (i * 2)
}
console.log(bank_account);


///////////////		MULTIPLES OF 3 AND 5			/////////////////////////


var multi = 0

for (let i = 1; i < 1000; i++) {
	if (i % 3 == 0 || i % 5 == 0) {
		multi += i
	}
}
console.log(multi);



///////////////		EASY DOES IT			/////////////////////////

const quote = ['So many books, so little time', 'You only live once, but if you do it right, once is enough', "If you tell the truth, you don't have to remember anything"]

///////////////		RANDOM			/////////////////////////


const randomThings = [1, 10, "Hello", true]


// 1. How do you access the 1st element in the array?

console.log(randomThings[0])

// 2. Change the value of "Hello" to "World".

randomThings[2] = 'World'

// 3. Check the value of the array to make sure it updated the array.

console.log(randomThings[2]);



///////////////		WE'VE GOT TO CLASS			/////////////////////////


const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

//  1. What would you write to access the 3rd element of the array?

console.log(ourClass[3]);
 
//  2. Change the value of "Github" to "Octocat"

ourClass[2] = 'Octocat'
console.log(ourClass[2]);

//  3. Add a new element, "Cloud City" to the array.

ourClass.push('Cloud City')



///////////////		MIX IT UP		/////////////////////////

 

myArray.push('Egon')

myArray.pop()

myArray.unshift('Bob Marley')

myArray.shift()


myArray.reverse()


///////////////		BIGGIE SMALLS	/////////////////////////


function biggieSmalls(num) {
	if (num < 100) {
		console.log('litle number');
	} else {
		console.log('big number');
	}
}

biggieSmalls(50)
biggieSmalls(150)


///////////////		MONKEY IN THE MIDDLE	/////////////////////////


function monkeyNumber(num) {
	if (num < 5) {
		console.log('litle number');
	} else if (num > 10){
		console.log('big number');
	} else {
		console.log('monkey')
	}
}

monkeyNumber(5)
monkeyNumber(10)
monkeyNumber(100)

///////////////		WHAT'S IN YOUR CLOSET	/////////////////////////


const kristynsCloset = [
	"left shoe",
	"cowboy boots",
	"right sock",
 	"GA hoodie",
 	"green pants",
 	"yellow knit hat",
 	"marshmallow peeps"
];

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

// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log('Kristin is rocking that ' + kristynsCloset[2] + ' Today!');

// 2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.

const kristynShoe = kristynsCloset.shift();

console.log(kristynShoe);


// 3. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

kristynsCloset.splice( 6, 0, 'raybans');


// 4. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

kristynsCloset[5] = 'stained knit hat';


// 5. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

thomsCloset[0][0]


// 6. In the same way, access one item from Thom's pants array.

 thomsCloset[1][1]


// 7. Access one item from Thom's accessories array.

thomsCloset[2][2]

// 8. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!

console.log('Thom is wearing a ' + thomsCloset[0][0] + ' shirt ' + ', a pair of ' + thomsCloset[1][1] + ' and a ' + thomsCloset[2][2])


// 9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = 'Footie pajamas'


///////////////		FUNCTIONS	/////////////////////////

		///////// printGreeting ////////////
// 1. Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

function printGreeting(name) {
	return 'Hello there, ' + name;
}

console.log(printGreeting('slimmer'))


///////// reverseWordOrder ////////////
// 1. Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

function reverseWordOrder(string) {
	return string.split(' ').reverse().join(' ');
}
console.log(reverseWordOrder('Macbook Air 2016'));

///////// calculate ////////////

function calculate(num1, num2, operation) {
	if (operation == 'add') {
		return num1 + num2
	} else if (operation == 'sub') {
		return num1 - num2
	} else if (operation == 'mult') {
		return num1 * num2
	} else if (operation == 'div') {
		return num1 / num2
	} else if (operation == 'exp') {
		return num1 ** num2
	}
}
///////////////		1		/////////////////////////
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

function printCool(name) {
	return name + ' is cool'
}

console.log(printCool('Captain Reynolds'));


///////////////		2		/////////////////////////
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(num) {
	return num * num * num
}
console.log(calculateCube(5));

///////////////		3		/////////////////////////
// Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

function isAVowel(string) {
	string = string.toLowerCase()
	return string == 'a' || string == 'e' || string ==  'i' || string ==  'o' || string ==  'u'
}

console.log(isAVowel("b"));

///////////////		4		/////////////////////////
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths(string1, string2) {
	return [string1.length, string2.length]
}
 console.log(getTwoLengths("Hank", "Hippopopalous"));


///////////////		5		/////////////////////////
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.


function getMultipleLengths(array) {
	var arrayLengths = []
	for (let i = 0; i < array.length; i++) {
		arrayLengths.push(array[i].length)
	}
	return arrayLengths
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


///////////////		6		/////////////////////////
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.



function maxOfThree(num1, num2, num3) {
	return Math.max(num1, num2, num3);
}

console.log(maxOfThree(6, 9, 1));

///////////////		7		/////////////////////////
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

function printLongestWord(array) {
	return array.sort(function (a, b) { return b.length - a.length; })[0];
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

///////////////		7		/////////////////////////

// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.


function transmogrify(num1, num2, num3) {
	return (num1 * num2) ** num3 
}

console.log(transmogrify(5, 3, 2));


///////////////		SYNTAX		/////////////////////////

const obj = { 'key' : 'value' }
 
// const - Sets the variable type to constant.
// obj - is the name of the variable.
// = - sets the variable on the left to the value on the right.
// { - Opening delimiter that define the begining of an object.
// 'key' - string assigned to access the value 
// : - sets the item on the left to be the key and sets the item on the right to be the value.
// 'value' - is the data stored.
// } - Closing delimeter that define the end of an object.


///////////////		ME		/////////////////////////

// Create an empty object called me.
// Assign it properties for name, age, and email with corresponding values.

var me = {};
me.name = 'Irwin';
me.age = 25;
me.email = 'email@email.com';

console.log(me);

// Using dot notation, access the name property in your object.

console.log(me.name);

// Without writing directly into the object, update the value of age to be 1000 years old.

me.age = 1000

// Using dot notation, verify that age has been updated.

console.log(me.age);

// Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.

me['place of residence'] = 'Chicago'

// Access the value of "place of residence"

console.log(me['place of residence']);

///////////////		SLIMER		/////////////////////////

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

// What would you write to access the name and console.log it?

console.log(monster.name);

// What would you write to change the type to 'creature' (without changing it inside the object)

monster.type = 'creature'

// What would you write to add a key to the object called age, and set the age to 6?

monster.age = 6

// console.log the object to make sure type is creature, and age is 6


console.log(monster);


///////////////		OGRES		/////////////////////////

var adventurer = {
	name: 'Irwin',
	hitpoints: 1000,
	damage: 69
}

var ogre = {
	hitpoints: 1150,
	damage: 42
}

for (var i = 0; i < 100; i++) {
	if (i % 2 == 0) {
		ogre.hitpoints -= adventurer.damage
	} else {
		adventurer.hitpoints -= ogre.damage
	}
	if (ogre.hitpoints <= 0) {
		console.log('The adventurer won!');
		break
	} else if (adventurer.hitpoints <= 0) {
		console.log('The ogre won');
		break
	}
	console.log('adventurer health: ' + adventurer.hitpoints);
	console.log('ogre health: ' + ogre.hitpoints);
}





























