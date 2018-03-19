//Conceptual Questions

let value;
let newValue;
let existingVariable;
//How do we assign a value to a variable?

//If the variable isn't already declared then:
//declare it with let or const first
//then use the assignment operator
let variable = value;

//otherwise, just use the assignment operator
variable = value;


//How do we change the value of a variable?

//Use the assignment operator
variable = newValue;

//How do we assign an existing variable to a new variable?
let newVariable = existingVariable;


//Strings

let firstVariable;
firstVariable = "Hello World";
firstVariable = 6;
let secondVariable = firstVariable;
secondVariable = "";

//firstVariable equals 6

let yourName = "Ben";

function greeting(str, name) {
	console.log(str + name);
}

greeting("Hello, my name is ",yourName);


//Booleans

// a < b
// c > d
// 'Name' === 'Name'
// a + b === c
// a * a === d
// e === 'Kevin'
// 48 !== '48'


//The Farm
function noise(animal) {
	if (animal === 'cow') {
		console.log("mooooo");
	}
	else {
		console.log("Hey! You're not a cow.");
	}
}


//Driver's Ed

let age = 25;

function canDrive(age) {
	if (age >= 16) {
		console.log("Here are the keys.");
	}
	else {
		console.log("Sorry, you're too young.")
	}
}

canDrive(age);


//Just Loop It

function zeroToTen() {
	for (let i = 0; i <= 10; i++) {
		console.log(i);
	}
}

function tenTo4000() {
	for (let i = 10; i <= 4000; i++) {
		console.log(i);
	}
}

function everyOthTenTo4000() {
	for (let i = 10; i <= 4000; i += 2) {
		console.log(i);
	}
}


//Let's get even

for (i = 2; i <= 100; i+=2) {
	console.log(i + " is an even number");
}


//Give me Five

for (i = 0; i <= 100; i++) {
	if (i%5 === 0) {
		console.log("I found a " + i + ". High five!");
	}
	if (i%3 === 0) {
		console.log("I found a " + i + ". Three is a crowd");
	}
}


//Savings account

let bank_account = 0;

for (i = 1; i <=10; i++) {
	bank_account += i;
}
console.log(bank_account);


bank_account = 0;

for (i = 1; i <= 100; i++) {
	bank_account += i*2;
}
console.log(bank_account);


//Multiples of 3 and 5
let sum = 0;

for (i = 0; i < 1000; i++) {
	if (i%5 === 0 || i%3 === 0) {
		sum += i;
	}
}

console.log(sum);


//Easy Does It

const quotes = ['Easier said than done.', 'There is no try, only do.', 'Early to rise, early to bed.'];


//Random

const randomThings = [1, 10, "Hello", true];

randomThings[0];
randomThings[2] = "World";
console.log(randomThings[2]);


//We've Got Class

const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];

ourClass[2];
ourClass[2] = "Octocat";
ourClass.push("Cloud City");


//Mix It Up

const myArray = [5,10,500,20];
myArray.push("Egon");
myArray.pop();
myArray.unshift("Bob Marley");
myArray.shift();
myArray.reverse();


//Biggie Smalls

let num = prompt("Enter a number");

if (num < 100) {
	console.log("little number");
}
else {
	alert("big number");
}


//Monkey in the Middle

if (num < 5) {
	console.log("little number");
}
else if (num > 10) {
	console.log("big number");
}
else {
	console.log("monkey")
}


//What's in Your Closet

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

//1
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

//2
let kristynShoe = kristynsCloset.shift();

//3
let kristynMarsh = kristynsCloset.pop();
kristynsCloset.push("raybans");
kristynsCloset.push(kristynMarsh);

//4
kristynsCloset[kristynsCloset.indexOf("yellow knit hat")] = "stained knit hat";

//5
let thomsShirt = thomsCloset[0][0];

//6
let thomsPants = thomsCloset[1][2];

//7
let thomsAcces = thomsCloset[2][2];

//8
console.log("Thom is looking fierce in a " + thomsShirt + ", " + thomsPants + ", " + thomsAcces + "!");

//9
thomsCloset[1][2] = "Footie Pajamas";
thomsPants = "Footie Pajamas";


//Functions

function printGreeting(name) {
	return "Hello there, " + name + "!";
}

function reverseWordOrder(str) {
	const strArr = str.split(" ");
	const revArr = strArr.reverse();
	let returnStr = "";
	for (let i in revArr) {
		returnStr += revArr[i] + " ";
	}
	returnStr = returnStr.slice(0,returnStr.length - 1);
	return returnStr;
}

function calculate(num1,num2,operation) {
	if (operation === "add") {
		return num1 + num2;
	}
	if (operation === "sub") {
		return num1 - num2;
	}
	if (operation === "mult") {
		return num1*num2;
	}
	if (operation === "div") {
		return num1/num2;
	}
	if (operation === "exp") {
		return Math.pow(num1,num2);
	}
}


//1
function printCool(name) {
	const isCoolStr = name + " is cool.";
	console.log(isCoolStr);
	return isCoolStr;
}

//2
function calculateCube(num) {
	const cube = Math.pow(num, 3);
	console.log(cube);
	return cube;
}

//3
function isAVowel(char) {
	const vowelArr = ['a', 'e', 'i', 'o', 'u', 'y'];
	char = char.toLowerCase();
	if (vowelArr.includes(char)) {
		return true;
	}
	else {
		return false;
	}
}

//4
function getTwoLengths(str1, str2) {
	const lengthArr = [str1.length, str2.length];
	return lengthArr;
}

//5
function getMultipleLengths(strArr) {
	const lengthArr = [];
	for (let i in strArr) {
		lengthArr.push(strArr[i].length);
	}
	return lengthArr;
}

//6
function maxOfThree(num1, num2, num3) {
	if (num1 >= num2 && num1 >= num3) {
		return num1;
	}
	else if (num2 >= num3) {
		return num2;
	}
	else {
		return num3;
	}
}

//7
function printLongestWord(strArr) {
	let word = "";
	let longWord = "";
	for (let i in strArr) {
		word = strArr[i];
		if (strArr[i].length > longWord.length) {
			longWord = strArr[i];
		}
	}
	return longWord;
}

//8
function transmogrify(num1, num2, num3) {
	return Math.pow(num1*num2, num3);
}


//Objects


//Syntax

// {} curly braces define the object.
// , commas indicate that we're finished defining a property or method and are ready to define the next one
// : colons separate properties and methods from their values


//ME

const me = {};

me.name = "Ben";
me.age = 25;
me.email = "benscharb@gmail.com";

console.log(me.name);

me.age = 1000;

console.log(me.age);

me["place of residence"] = "Saint Helens";

console.log(me["place of residence"]);


//Slimer

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(monster.name);

monster.type = "creature";

monster.age = 6;

console.log(monster);


//Ogres

const adventurer = {
	name: 'Bob',
	hitpoints: 10,
	equipment: [{name: "sword", type: "attack", effect: "+5"},
	{name: "sheild", type: "defense", effect: "+2"},
	{name: "armor", type: "defense", effect: "+4"},
	{name: "helm", type: "defense", effect: "+1"}]
}

const ogre = {
	hitpoints: 50,
	equipment: [{name: "club", type: "attack", effect: "+4"}]
}

function fight(adventurer, ogre) {
	let ogreDam = 5;
	let advDam = 5;
	let item = {};

	for (let i in adventurer.equipment) {
		item = adventurer.equipment[i];
		if (item.type === "attack") {
			advDam = advDam + parseInt(item.effect);
		}
		if (item.type === "defense") {
			ogreDam = ogreDam - parseInt(item.effect);
		}
	}

	for (let i in ogre.equipment) {
		item = ogre.equipment[i];
		if (item.type === "attack") {
			ogreDam = ogreDam + parseInt(item.effect);
		}
		if (item.type === "defense") {
			advDam = advDam - parseInt(item.effect);
			
		}
	}
	
	if (advDam < 0) {
		advDam = 0;
	}

	if (ogreDam < 0) {
		ogreDam = 0;
	}

	console.log(ogreDam, " ", advDam);

	while(adventurer.hitpoints > 0 && ogre.hitpoints > 0) {
		if (Math.round(Math.random()) === 1) {
			ogre.hitpoints -= advDam;
		}
		else {
			adventurer.hitpoints -= ogreDam;
		}
	}

	if (ogre.hitpoints <= 0) {
		return adventurer.name + " wins!";
	}

	if (adventurer.hitpoints <= 0) {
		return adventurer.name + " died.";
	}
}

console.log(fight(adventurer,ogre));


//Extra Stuff

//Cat Combinator

//Mama cat
const cat1 = {
	name: 'Crookshanks',
	breed: 'tabby',
	age: 20
};

console.log(cat1.age);
console.log(cat1.breed);

//Papa cat
const cat2 = {
	name: 'Tom',
	breed: 'siamese',
	age: 15
}

//Combine Cats!

function combineCats(mama, papa) {
	console.log(mama);
	console.log(papa);
	const newCat = {
		name: mama.name + papa.name,
		age: 1,
		breed: mama.breed + "-" + papa.breed
	}
	return newCat;
}

console.log(combineCats(cat1,cat2));

//Cat brain bender

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));


