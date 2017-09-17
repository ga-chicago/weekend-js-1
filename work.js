// Conceptioinal Questions
// Number 1
let pet = "animal";
const mammal = "dolphin";

// Number 2
pet = 123;

// Number 3 
const puppy = mammal;


// Strings
// Number 1
let firstVariable = "Hello World";
firstVariable = 123;
let secondVariable = firstVariable;
secondVariable = "Abc";
// The value of firstVariable is 123

// Number 2
const yourName = "Mat Bakutis";
console.log("Hello my name is " + yourName);


// Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

a < b;
c > d;
'Name' === 'Name';
a < b < c;
a === a < d;
e === 'Kevin';
48 != '48';


// The Farm
// Number 1
let animal = "cow";
if (animal === "cow"){
	console.log("Moo!");
};

// Number 2
let animal = "cow";
if (animal === "cow"){
	console.log("Moo!");
}else {
	console.log("Hey! You're not a cow!");
};


// Driver's Ed
// Number 1
let age = 17;

// Number 2
if (age >= 16){
	console.log("Here are the keys.");
};

// Number 3
if (age >= 16){
	console.log("Here are the keys.");
}else {
	console.log("Sorry, you're too young.");
};


// Just Loop It
// Number 1
for (let i = 0; i <= 10; i++){
	console.log(i);
};

// Number 2
for (let i = 10; i <= 4000; i++){
	console.log(i);
};

// Number 3
for (let i = 10; i <= 4000; i++){
	if (i % 2 === 0){
		console.log(i);
	};
};


// Let's get even
// Number 1
for (let i = 1; i <= 100; i++){
	if (i % 2 === 0){
		console.log(i);
	};
};

// Number 2
for (let i = 1; i <= 100; i++){
	if (i % 2 === 0){
		console.log(i + " is an even number.");
	};
};


// Give me Five
// Number 1
for (let i = 0; i <= 100; i++){
	if (i % 5 === 0){
		console.log("I found a " + i + ". High five!");
	};
};

// Number 2
for (let i = 0; i <= 100; i++){
	if (i % 5 === 0){
		console.log("I found a " + i + ". High five!");
	};
	if (i % 3 === 0){
		console.log("I found a " + i + ". Three  is croud!");		
	};
};


// Savings account
// Number 1
let bank_account = 0;
for (let i = 0; i <= 10; i++){
	bank_account += i;
};

// Number 2
for (let i = 0; i <= 100; i++){
	bank_account += i * 2;
};


// Multiples of 3 and 5
let sum = 0;
for (let i = 0; i <= 1000; i++){
	if (i % 5 === 0){
		sum += i;
	};
	if (i % 3 === 0){
		sum += i;		
	};
};


// Easy does it
const quotes = ['Quote 1', 'Quote 2', 'Quote 3'];


// Random
const randomThings = [1, 10, "Hello", true];

// Number 1
randomThings[0];

// Number 2
randomThings[2] = "World";


// We've got class
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];

// Number 1
ourClass[2];

// Number 2
ourClass[2] = "Octocat";

// Number 3
ourClass.push("Cloud City");


// Mix it up
const myArray = [5 ,10 ,500, 20];

// Number 1
myArray.push("Egon");

// Number 2
myArray.pop();

// Number 3
myArray.unShift("Bob Marley");

// Number 4
myArray.shift();

// Number 5
myArray.reverse();


// Biggie Smalls
if (num < 100){
	console.log("little number");
}else {
	console.log("big number");
};


// Monkey in the Middle
if (num < 5){
	console.log("little number");
}else if (num > 10){
	console.log("big number");
}else {
	console.log("monkey")
};


// What's in your closet
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

// Number 1
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// Number 2
const kristynShoe = kristynsCloset.shift();

// Number 3
kristynsCloset.push(kristynsCloset[6]);
kristynsCloset[6] = "raybans";

// Number 4
kristynsCloset[5] = "stained knit hat";

// Number 5
thomsCloset[0][0];

// Number 6
thomsCloset[1][1];

// Number 7
thomsCloset[2][2];

// Number 8
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", and a pair of " + thomsCloset[2][2]);

// Number 9
thomsCloset[1][2] = "Footie Pajamas";


// Print Greeting
const printGreeting = (name) => {
	console.log("Hello there, " + name + "!");
};


// Reverse word order
const reverseWordOrder = (sentence) => {
	let arr = [];
	let newSentence = sentence.split(" ").reverse().join(" ");
	return (newSentence);
};


// caculate
const calculate = (num1, num2, operation) => {
	if (operation === "add"){
		return (num1 + num2);
	}else if (operation === "sub"){
		return (num1 - num2);
	}else if (operation === "mult"){
		return (num1 * num2);
	}else if (operation === "div"){
		return (num1 / num2);
	}else if (operation === "exp"){
		return (Math.pow(num1, num2));
	}else {
		return ("Operation invalid.");
	};
};


// 1 / Print Cool
const printCool = (name) => {
	return (name + " is cool.");
};


// 2 / calculate cube
const calculateCube = (num) => {
	return (num * num * num);
};


// 3 / is a vowel
const isAVowel = (letter) => {
	if (letter === 'a' || 'u' || 'o' || 'e' || 'i' || 'A' || 'U' || 'O' || 'E' || 'I'){
		return (true);
	}else {
		return (false);
	};
};


// 4 / get two lengths
const getTwoLengths = (string1, string2) => {
	let finalArray = [string1.length, string2.length];
	return(finalArray);
};


// 5 / get multiple lengths
const getMultipleLengths = (stringArray) => {
	let finalArray = [];	
	for (i = 0; i < stringArray.length; i++){
		finalArray[i] = stringArray[i].length;
	}
	return(finalArray);
};


// 6 / Max of three
const maxOfThree = (num1, num2, num3) => {
	let arr = [num1, num2, num3];
	let highest = 0;
	let highestNum = 0;
	for (i = 0; i < 3; i++){
		if ((arr[i] >= arr[i + 1]) && (arr[i] > highestNum)){
			highest = i;
			highestNum = arr[i];
		};
		if ((arr[i] >= arr[i - 1]) && (arr[i] > highestNum)){
			highest = i;
			highestNum = arr[i];
		};
		if ((arr[i] >= arr[i + 2]) && (arr[i] > highestNum)){
			highest = i;
			highestNum = arr[i];
		};
		if ((arr[i] >= arr[i - 2]) && (arr[i] > highestNum)){
			highest = i;
			highestNum = arr[i];
		};
	};
	return (arr[highest]);
};


// 7 / print longest word
const printLongestWord = (array) => {
	let long = 0;
	let longest = 0;
	for (let i = 0; i < array.length; i++){
		if (array[i].length > long){
			longest = i;
			long = array[i].length;
		};
	};
	return (array[longest]);
};


// 8 / transmogrify
const transmogrifier = (x, y, z) => {
	let transmogrified = Math.pow((x * y), z);
	return (transmogrified);
};


// Object Syntax
// const to set a constant variable, then the name of the object
// then an equals, followed by an open curly bracket, inside you
// set properties by following them with a colon after which you
// put what that property is, and in a list of them you follow
// each one with a comma. then finish it off with a curly bracket
// and a semicolon
const myObject = {prop1: 1,
				  prop2: "2"};



// Me
// Number 1
const me = {};

// Number 2
const me = {name: "Ben", age: 11, email: "bakutis.ben@gmail.com"};

// Number 3
me.name;

// Number 4
me.age = 1000;

// Number 5
me.age;

// Number 6
me["age of residence"] = "naperville";

// Number 7
me["age of residence"];


// Slimer
const monster = {
	name: "Slimer",
	color: "greenish",
	type: "plasm or ghost or something"
}

// Number 1
console.log(monster.name);

// Number 2
monster.type = "creature";

// Number 3
monster.age = 6;


// Ogres
const adventurer = {name: "Mat", hitpoints: 100, attack: 15, defence: 12};
const ogre = {name: "Shrek", hitpoints: 150, attack: 8, defence: 25};
const battle = (player1, player2) => {
	alert("Battle Initiated! Good Luck!");
	let winner = "";
	while (player1.hitpoints > 0 && player2.hitpoints > 0){
		let player1attack = getAttack(player1.attack) - getDefence(player2.defence);
		let player2attack = getAttack(player2.attack) - getDefence(player1.defence);
		player1.hitpoints -= player2attack;
		alert(player2.name + " attacks " + player1.name + " and does " + player2attack + " damage!     " + player1.name + " now only has " + player1.hitpoints + " hitpoints left!");
		player2.hitpoints -= player1attack;
		alert(player1.name + " attacks " + player2.name + " and does " + player1attack + " damage!     " + player2.name + " now only has " + player2.hitpoints + " hitpoints left!");
		if (player1.hitpoints <= 0){
			winner = player2.name;
		}else if (player2.hitpoints <= 0){
			winner = player1.name;
		};
	};
	return (alert(winner + " is victorious!"));
};
const getAttack = (attack) => {
	min = Math.ceil(attack - 2);
	max = Math.floor(attack + 2);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getDefence = (defence) => {
	min = Math.ceil(defence / 4);
	max = Math.floor(defence / 3);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};



// Cat Combinator
// Number 1
const cat1 = {name: "Pixel", breed: "Russian Blue", age: 9};

// Number 2
const cat2 = {name: "Julian", breed: "Siamese", age: 10};

// Number 3 
const combineCats = (cat1, cat2) => {
	const cat3 = {name: cat1.name + cat2.name, breed: cat1.breed + "-" + cat2.breed, age: 1};
	return (cat3)
};

// Number 4
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));
