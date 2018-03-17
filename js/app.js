// CONCEPTUAL QUESTIONS

// 1

// We assign a value to a variable by declaring it in the code.
// We can either declare it as a constant variable, which should be used if possible,
// or a let variable. A constant variable can only be assigned one time,
// and a let variable can be assigned as many times as needed.

// 2

// For a let variable, a new value can be reassigned.
// Otherwise, the value of a variable can be changed using a method.

// 3

// An existing variable can be assigned to a new variable by declaring it.
// Again, this can be done as a const or let variable, but const is preferred
// if possible.
// Ex: const arr = [1, 2, 3];
// const countToThree = arr;

// STRINGS

// 1

let firstVariable = "Hello World";
firstVariable = 2;
let secondVariable = firstVariable;
secondVariable = "Goodbye World";
console.log(firstVariable);

// the value of firstVariable is still 2, per the reassignment.

// 2

const yourName = "Tyler Earls";
console.log("Hello, my name is " + yourName);

// BOOLEANS

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
console.log(a < b < c);
console.log(a * a === d);
console.log(e === "Kevin");
console.log(48 == "48");

// THE FARM

let animal = "cow";

if (animal === "cow") {
	console.log("mooooo");
} else {
	console.log("Hey! You're not a cow.");
};

// DRIVER'S ED

let age = 145;

if (age >= 16) {
	console.log("Here are the keys");
} else {
	console.log("Sorry, you're too young.")
};

// JUST LOOP IT

// 1

for (let i = 0; i <= 10; i++) {
	console.log(i);
};

// 2

for (let i = 10; i <= 4000; i++) {
	// console.log(i);  
	// I know it works, just don't want to clog up my console.
};

// 3

for (let i = 10; i <= 4000; i+=2) {
	// console.log(i);
	// works, just don't want to clog up my console
};

// LET'S GET EVEN

for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0){
		// console.log(i + " is an even number.");
	}
};

// GIVE ME FIVE

for (let i = 0; i <= 100; i++) {
	// put both i % 15 so multiples of 3 AND 5
	// would get their appropriate message logged for both.
	if (i % 15 === 0) {
		// console.log("I found a " + i + ". High five!");
		// console.log("I found a " + i + ". Three is a crowd");
	} else if (i % 5 === 0) {
		// console.log ("I found a " + i + ". High five!");
	} else if (i % 3 === 0) {
		// console.log("I found a " + i + ". Three is a crowd");
	}
};

// SAVINGS ACCOUNT

// 1
// expected output: 55
let bank_account = 0;
for (let i = 1; i <= 10; i++){
    bank_account += i;
	if (i === 10){
		console.log(bank_account);
	}
};

// 2
// expected output: 10100

let bank_account_bonus = 0;
for (let i = 1; i <= 100; i++){
	bank_account_bonus += i * 2;
	if (i === 100){
		console.log(bank_account_bonus);
	} 
};

// MULTIPLES OF 3 AND 5

let sum = 0;
for (let i = 0; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0){
		sum += i;
	}
	if (i === 999) {
		console.log(sum);
	}
};

// EASY DOES IT

const quotes = ["Tyler", "Andrew", "Earls"];

// RANDOM

const randomThings = [1, 10, "Hello", true];

console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings);

// WE'VE GOT CLASS

const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];

console.log(ourClass[3]);
ourClass[2] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

// MIX IT UP

const myArray = [5, 10, 500, 20];
myArray.push("Egon");
myArray.pop();
myArray.unshift("Bob Marley");
myArray.shift();
myArray.reverse();
console.log(myArray);

// BIGGIE SMALLS

const numEntered = 10;
if (numEntered < 100) {
	console.log("little number");
} else {
	alert("big number");
};

// MONKEY IN THE MIDDLE

if (numEntered < 5) {
	console.log("little number");
} else if (numEntered > 10) {
	console.log("big number");
} else {
	console.log("monkey");
};

// WHAT'S IN YOUR CLOSET?

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

// 1
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// 2
const kristynShoe = kristynsCloset[0];
kristynsCloset.shift();

// 3
// yes, I didn't feel like counting the index. lol
kristynsCloset.splice(kristynsCloset.length - 1, 0, "raybans");

// 4
kristynsCloset[kristynsCloset.length - 3] = "stained knit hat";
console.log(kristynsCloset);

// 5
console.log(thomsCloset[0][0]);

// 6
console.log(thomsCloset[1][0]);

// 7
console.log(thomsCloset[2][0]);

// 8
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][1] + "!");

// 9
thomsCloset[1][2] = "Footie Pajamas";

// FUNCTIONS

// printGreeting

const printGreeting = (name) => {
	return ("Hello there, " + name + "!");
};
console.log(printGreeting("Slimer"));

// reverseWordOrder

const reverseWordOrder = (str) => {
	// splitting string at spaces into array
	// reverse array
	// convert back to string
	// replace commas with a space
	// return result of that
	// apparently I can do all this in one line of code????
	return str.split(" ").reverse().toString().replace(/,/g, " ");
}

console.log(reverseWordOrder("Ishmael me Call"));

// calculate

const calculate = (num1, num2, operation) => {
	if (operation === "add") {
		return num1 + num2;
	} else if (operation === "sub") {
		return num1 - num2;
	} else if (operation === "mult") {
		return num1 * num2;
	} else if (operation === "div") {
		return num1 / num2;
	} else if (operation === "exp") {
		return num1 ** num2;
	} else {
		return ("Sorry, this function is not recognized.");
	}
};
console.log(calculate(1, 2, "add"));
console.log(calculate(5, 2, "sub"));
console.log(calculate(2, 3, "mult"));
console.log(calculate(6, 2, "div"));
console.log(calculate(3, 3, "exp"));
console.log(calculate(4, 2, "modulus"));

// calculateCube

const calculateCube = (num) => {
	return num ** 3;
};

console.log(calculateCube(3));

// isAVowel

const isAVowel = (letter) => {
	if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
		return true;
	} else {
		return false;
	}
};
console.log(isAVowel("a"));
console.log(isAVowel("k"));

// getTwoLengths

const getTwoLengths = (str1, str2) => {
	return [str1.length, str2.length];
};
console.log(getTwoLengths("Hello", "Captain Kirk"));

// getMultipleLengths

const getMultipleLengths = (strArr) => {
	const strLengths = [];
	for (let i = 0; i < strArr.length; i++) {
		strLengths.push(strArr[i].length);
	}
	return strLengths;
};

console.log(getMultipleLengths(["My", "Captain's", "name", "is", "James", "T.", "Kirk"]));

// maxOfThree

const maxOfThree = (x, y, z) => {
	return Math.max(x, y, z);
};

console.log(maxOfThree(45, 132, 16));

// printLongestWord

const printLongestWord = (strArr) => {
	const strLengths = [];
	for (let i = 0; i < strArr.length; i++) {
		strLengths.push(strArr[i].length);
	}
	for (let i = 0; i < strArr.length; i++) {
		// can't use ...strLengths[i] as an argument for Math.max()
		// because if it tries to iterate there will only be one number read.
		if (Math.max(...strLengths) === strArr[i].length) {
			return strArr[i];
		}
	}
};

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// transmogrify

const transmogrify = (x, y, z) => {
	return (x * y) ** z;
};

console.log(transmogrify(5, 3, 2));

// OBJECTS

// SYNTAX

// {} defines the object
// : separates the key from its value
// , is used to separate the key/value pairs
// "" is used to define a string value
// [] is used to define an array value

// ME

// 1
const me = {};

// 2
me.name = "Tyler Earls";
me.age = "24 years old";
me.email = "tyler.a.earls@gmail.com";

// 3
me.name;

// 4
me.age = "100 years old";

// 5
console.log(me.hasOwnProperty("24 years old")); // reads false because it has changed

// 6
me["place of residence"] = "Chicago";

// 7
console.log(me["place of residence"]);

// Slimer

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
};

console.log(monster.name);
monster.type = "creature";
monster.age = 6;
console.log(monster);

// OGRES

const adventurer = {
	name: "Randolph the Third",
	hitpoints: 100,
	species: "dwarf",
	weapon: "war hammer",
	shield: "wooden",
	power: 4,
	vitality: 6 
};

const ogre = {
	name: "Stalin",
	hitpoints: 120,
	species: "ogre",
	color: "green",
	weapon: "club",
	shield: "wooden",
	power: 5,
	vitality: 7
};

// weapon/shield are descriptions
// power/vitality are the values of their attack/defense

// small program simulating a battle between adventurer and ogre

// random integer generating function 
// parameter = maximum number that can be generated

const getRandomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
};

console.log(getRandomInt(10));

const battle = (fighter1, fighter2) => {
	// set conditions for the hitpoints to decrease
	// should be random so the result isn't always the same
	// random number + power - vitality = damage done per turn

	// set conditions for if they die and battle has ended
	// hitpoints must be less than or equal to zero in case
	// the attack power decreases hitpoints by more than what's left
	// run function again until hit points of one fighter are zero
	// set variables for each fighters attack power
	let fighter1Power = getRandomInt(10) * fighter1.power;
	let fighter2Power = getRandomInt(10) * fighter2.power;
	// set variables for damage taken each time function runs (each "turn")
	// not necessary but makes it cleaner
	let fighter1DamageTaken = (fighter2Power - fighter1.vitality);
	let fighter2DamageTaken = (fighter1Power - fighter2.vitality);
	// console.log(fighter1Power); // working
	// console.log(fighter2Power); // working
	// set conditions for each fighter getting damaged, update hitpoints to be decreased
	if (fighter1Power > fighter2.vitality) {
		fighter2.hitpoints = fighter2.hitpoints - fighter2DamageTaken;
		console.log(fighter2.name + " has taken " + fighter2DamageTaken + " damage!");
		console.log(fighter2.name + " has " + fighter2.hitpoints + " hitpoints remaining.");
	} 
	if (fighter2Power > fighter1.vitality) {
		fighter1.hitpoints = fighter1.hitpoints - fighter1DamageTaken;
		console.log(fighter1.name + " has taken " + fighter1DamageTaken + " damage!");
		console.log(fighter1.name + " has " + fighter1.hitpoints + " hitpoints remaining.");
	}
	// end condition if one of the fighters dies
	if (fighter2.hitpoints <= 0) {
		console.log(fighter2.name + " has died.", fighter1.name + " is victorious!");
		return (fighter2.name + " has died." + fighter1.name + " is victorious!");
	} else if (fighter1.hitpoints <= 0) {
		console.log(fighter1.name + " has died.", fighter2.name + " is victorious!");
		return (fighter1.name + " has died." + fighter2.name + " is victorious!");
	} else {
		// run function again until end condition is met
		battle(fighter1, fighter2);
	}
};

console.log(battle(adventurer, ogre)); //undefined until I determine a way to make the function loop again until hitpoints of a fighter reach zero


// EXTRA STUFF

// CAT COMBINATOR

// MAMA CAT

const cat1 = {
	name: "Linda",
	breed: "Siamese",
	age: 4
};

// PAPA CAT

const cat2 = {
	name: "Craig",
	breed: "Persian",
	age: 3
};

console.log(cat1.name);

const combineCats = (mama, papa) => {
	return {
		name: mama.name + papa.name,
		breed: mama.breed + "-" + papa.breed,
		age: 1
	};
};

console.log(combineCats(cat1, cat2));

console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

// for the last one, the easiest way to get it right
// is to copy/paste the function in the previous console.log
// as the two arguments in a new combineCats function

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));

