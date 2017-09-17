// Cullen Mooney Weekend Homework 9/15

// Conceputals Problems
// #1 
let practice = 'cullen';

// #2 
practice = 'mooney';

// #3 
const morePractice = practice;

// Strings
// #1
let firstVariable = 'Hello World';
firstVariable = 25;
let secondVariable = firstVariable;
secondVariable = 'Cullen';

firstVariable;  //--> output is 25

// #2
const myName = 'Cullen';
console.log('Hello my name is ' + myName);

// Booleans
// #1
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  a < b //--> true
  c > d //--> true
  'Name' === 'Name' //--> true
  a < b < c  //--> true
  a === a < d //--> true
  e === 'Kevin' //--> true
  48 !== '48' //--> true

// The Farm
const whatAnimal = (animal) => {
	if (animal === 'cow') {
		return 'moooo';
	}
	else {
		return 'Hey youre not a cow';
	}
};
whatAnimal('cow');  //--> output is moooo

// Driver's Ed
const canYouDrive = (age) => {
	if (age >= 16) {
		return 'Here are the keys'
	}
	else {
		return 'Sorry, youre too young'
	}
};
canYouDrive(21);  //--> here are the keys

// Just Loop It
// #1
for (let i = 0; i < 11; i ++) {
	console.log(i);
}

// #2
for (let i = 10; i < 4001; i++) {
	console.log(i)
}

// #3
for (let i = 10; i < 4001; i++) {
	if(i % 2 === 0) {
		console.log(i);
	}
};

// Let's Get Even
for (let i = 1; i < 101; i++) {
	if(i % 2 === 0) {
		console.log(i + ' is an even number');
	}
};

// Give me Five
for (let i = 0; i < 101; i++) {
	if (i % 5 === 0) {
		console.log('I found a ' + i + '. High five!');
	}
	if (i % 3 === 0) {
		console.log('I found a ' + i + '. Three is a crowd');
	}
};

// Savings Account
// #1
let bankAccount = 0;
for (let i = 1; i < 11; i++) {
	console.log(bankAccount += i);
};

// #2
let bankAccount = 0;
for (let i =1; i < 101; i++) {
	console.log(bankAccount += i * 2);
};

// Multiples of 3 and 5
let sum = 0
for (let i = 0; i < 1000; i++) {
	if (i % 5 === 0 || i % 3 === 0) {
		console.log(sum += i);
	}
};

// Easy Does It
const quotes = ['get rich or die trying', 'mo money mo problems', 'got my vans on but they look like sneakers'];

// Random
const randomThings = [1, 10, 'Hello', true];
randomThings[0];  //-->output is 1
randomThings[2] = 'World';  //--> third elelement is now 'World'
randomThings; //--> prints new updated array

// We've Got Class
const ourClass = ['Gizmo', 'Zoom', 'Github', 'Slack'];
ourClass[2]; //--> accesses third element
ourClass[2] = 'Octocat'; //--> changes the third element 
ourClass.push('Cloud City'); //--> adds a new element to array
ourClass;

// Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push('Egon');
myArray.pop();
myArray.unshift('Bob Marley');
myArray.shift();
myArray.reverse();
myArray;

// Biggie Smalls

number = 110;
if (number < 100) {
	console.log('little number');
}
else {
	alert('big number');
}

number;

// Monkey in the Middle
number = 20;
if (number < 5) {
	console.log('little number');
}
else if (number > 10) {
	console.log('big number');
}
else {
	console.log('monkey');
};

// What's in Your Closet
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// #1
console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');

// #2
kristynShoe = kristynsCloset.shift();

// #3
kristynsCloset.splice(5, 0, 'ray bans');

// #4
kristynsCloset[4] = 'stained knit hat';


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

// #5 
thomsCloset[0][0];

// #6
thomsCloset[1][1];

// #7
thomsCloset[2][2];

// #8
console.log('Thom is looking like a badass in his ' +  thomsCloset[0][0] + ', ' + thomsCloset[1][1] + ', and ' + thomsCloset[2][2] + '.');

// #9
thomsCloset[1][2] = 'Footie Pajamas';

// Functions

//Print Greeting
const printGreeting = (name) => {
	return ('Hello there ' + name);
};

// Reverse Word Order
const reverseWordOrder = (someString) => {
	return someString.split(' ').reverse().join(' ');
};

// Calculate
const calculate = (num1, num2, operation) => {
	if (operation === 'add') {
		return num1 + num2;
	}
	if (operation === 'sub') {
		return num1 - num2;
	}
	if (operation === 'mult') {
		return num1 * num2;
	}
	if (operation === 'div') {
		return num1 / num2;
	}
	if (operation === 'exp') {
		return Math.pow(num1, num2);
	}
};

// #1
const printCool = (name) => {
	return (name + ' is cool');
};

// #2
const calculateCube = (number) => {
	return Math.pow(number, 3);
};

// #3
const isAVowel = (letter) => {
	if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
		return true;
	}
	else {
		return false;
	}
};

// #4
let numberArray = [];
const getTwoLengths = (string1, string2) => {
	numberArray.push(string1.length, string2.length);
	return numberArray;
};

// #5 // NEED TO FIGURE OUT
const getMultipleLengths = (arrayOfStrings) => {
	let numberArray = [];
	for (i = 0; i < arrayOfStrings.length; i++) {
		numberArray = arrayOfStrings[i].length;
	}
	return numberArray;
};

// #6
const maxOfThree = (num1, num2, num3) => {
	return Math.max(num1, num2, num3);
};

// #7
const printLongestWord = (arrayOfStrings) => {
	let longestWord = '';
	for (i = 0; i < arrayOfStrings.length; i++) {
		if (arrayOfStrings[i].length > longestWord.length) {
			longestWord = arrayOfStrings[i];
		}
	}
	return longestWord;
};

// #8
const transmogrify = (num1, num2, num3) => {
	return Math.pow((num1 * num2), num3);
};

// Objects

// Syntax
// {defines the object}
// name: ---> property
// value, ---> value

// Me
const me = {
	name: 'Cullen',
	age: 25,
	email: 'cullen@protonmail.com'
};

me.name;
me.age = 1000;
me.age;
me["Place of Residence"] = 'Oak Park';
me["Place of Residence"];

// Slimer
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
};

console.log(monster.name);
monster.type = 'creature';
monster.age = 6;
console.log(monster);

// Ogres -- not really sure how to go about this...
const ogre = {
	hitpoints: 0
}

const adventurer = {
	name: 'Cullen'
	hitpoints: 0
}

// Extra Stuff 
const cat1 = {
	name: 'Mr. Jynx',
	breed: 'Maine Coon',
	age: 6
};

console.log(cat1.age);
console.log(cat1.breed);

const cat2 = {
	name: 'Garfield',
	breed: 'Shorthair',
	age: 8
};

const combineCats = (mama, papa) => {
	if (mama === cat1) {
		console.log(cat1);
	}
	if (papa === cat2) {
		console.log(cat2);
	}
};
