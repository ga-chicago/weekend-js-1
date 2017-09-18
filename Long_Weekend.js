//Conceptual Questions

1. In javascript, we define a variable using either 
const, which permanently fixes a particular value to a variable,
or let, which temporarily fixes a particular value to a variable.
We also use a single equal sign, which assigns a value,
rather than multiple equals signs, which assert a statement
to be defined under true or false.

2. For a variable originally defined as let, 
we can set the variable on the left side of the equation
and then the new value on the right side of the equation.
A variable originally defined with const cannot be changed

3. If we take a new variable on the left side of an equation
and put the previously defined variable on its right side
it will define the new variable with the desired value

//Strings

//1

let firstVariable;

firstVariable = 'Hello World';
firstVariable = 66;
let secondVariable = firstVariable;
secondVariable = 'Hello World';
firstVariable = 66; //does not change when secondVariable is redefined

//2

const yourName = 'Thomas Murphy';

console.log('Hello, my name is ' + yourName);

//Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

a < b; //true
c > d; //true
'Name' === 'Name'; //true
a !== b !== c; //true
a <= a <= d; //true
e === 'Kevin'; //true
48 !== '48'; //true

//Farm

//1

if (animal === 'cow') {
	console.log('mooooo');
}

//2

if (animal === 'cow') {
	console.log('mooooo');
} else {
	console.log("Hey! You're not a cow.")
}

//Driver's Ed

//1

let permitAge = 25;

//2

if (permitAge >= 16) {
	console.log('Here are the keys');
}

//3
if (permitAge >= 16) {
	console.log('Here are the keys');
} else {
	console.log("Sorry, you're too young");
}

//Just Loop It

//1

for (i = 0; i < 11; i++){
	console.log(i);
}

//2

for (i = 10; i < 4001; i++) {
	console.log(i);
}

//3

for (i = 10; i < 4001; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

//Let's get even

//1

for (i = 1; i < 101; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

//2

for (i = 1; i < 101; i++) {
	if (i % 2 === 0) {
		console.log(i + ' is an even number');
	}
}

//Give me Five

//1

for (i = 0; i < 101; i++) {
	if (i % 5 === 0) {
		console.log('I found a ' + i + '. High five!');
	}
}

//2

for (i = 1; i < 101; i++) {
	if (i % 5 === 0) {
		console.log('I found a ' + i + '. High five!');
	} if (i % 3 === 0) {
		console.log('I found a ' + i + '. Three is a crowd.');
	}
}

//Savings account

//1

let bankAccount = 0;

for (i = 0; i < 11; i++) {
	bankAccount += i;
}

//2

let bankAccount = 0;

for (i = 0; i < 101; i++) {
	bankAccount += (2*i);
}

//Multiples of 3 and 5

let eulerProblem = 0;

for (i = 0; i < 1000; i++) {
	if (i % 5 === 0 || i % 3 === 0) {
		eulerProblem += i;
	}
}

eulerProblem === 233168;

//Easy Does It

const quotes = ['speak softly and carry a big stick', 'gray twilight that knows not victory nor defeat', 'we do not admire the man of timid peace'];

//Random

const randomThings = [1, 10, 'hello', true];

//1

randomThings[0] === 1;

//2

randomThings[2] = 'World';

//3

randomThings;

//We've got Class

const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

//1

ourClass[2] === 'Github';

//2

ourClass[2] = 'Octocat';

//3

ourClass.push('Cloud City');

//Mix It Up

//4

const myArray = [5, 10, 500, 20]

//5

myArray.push('Egon');

//6

myArray.pop();

//7

myArray.unshift('Bob Marley');

//8

myArray.shift();

//9

myArray.reverse();

//Biggie Smalls

let x;

if (x < 100) {
	console.log('little number');
} else {
	console.log('big number');
}

//Monkey in the Middle

let x;

if (x < 5) {
	console.log('little number');
} else if (x > 10) {
	console.log('big number');
} else {
	console.log('monkey');
}

//What's in your closet?

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

console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');

//2

const kristynsShoe = kristynsCloset[0];
kristynsCloset.shift();

//3

kristynsCloset.splice(5, 0, 'raybans');

//4

kristynsCloset[4] = 'stained knit hat';

//5

thomsCloset[0][1]; //accesses dark grey button-up

//6

thomsCloset[1][2]; //accesses PJs

//7

thomsCloset[2][0]; //accesses wool mittens

//8

console.log('Thom is looking fierce in a ' + thomsCloset[0][1] + ', ' + thomsCloset[1][2] + ' and ' + thomsCloset[2][0] + '!');

//9

thomsCloset[2][0] = 'Footie Pajamas';

//Functions

//initial practice

const printGreeting = (name) => {
	return ('Hello there, ' + name + '!');
};

const reverseWordOrder = (text) => {
	let newText = text.split(' ').reverse();
	return newText.join(' ');
}

const calculate = (num1, num2, opt) => {
	if (opt === 'add') {
		return num1 + num2;
	} else if (opt === 'sub') {
		return num1 - num2;
	} else if (opt === 'mult') {
		return num1 * num2;
	} else if (opt === 'div') {
		return num1 / num2;
	} else if (opt === 'exp') {
		return (num1 ** num2);
	} else {
		return 'fool!';
	}
}

//1

const printCool = (name) => {
	return (name + " is cool");
}

//2

const calculateCube = (num) => {
	return (num ** 3);
}

//3

const isAVowel = (char) => {
	let set = char.toLowerCase();
	if (set.length === 1) {
		if (set === 'a' || set === 'e' || set === 'i' || set === 'o' || set === 'u') {
			return true;
		} else {
			return false;
		}
	} else {
		return 'please try again';
	}
}

//4

const getTwoLengths = (strOne, strTwo) => {
	let arr = [];
	arr.push(strOne.length);
	arr.push(strTwo.length);
	return arr;
}

//5

const getMultipleLengths = (arrayStrings) => {
	const arraySolution = [];
	for (let v in arrayStrings) {
		arraySolution.push(arrayStrings[v].length);
	}
	return arraySolution;
}

//6

const maxOfThree = (num1, num2, num3) => {
	if (num1 >= num2) {
		if (num1 >= num3) {
			return num1;
		} else {
			return num3;
		}
	}
	if (num2 >= num1) {
		if (num2 >= num3) {
			return num2;
		} else {
			return num3;
		}
	}
}

//7

const printLongestWord = (collect) => {
	let longestWord = '';
	for (let i = 0; i < collect.length; i++){
		if (collect[i].length > longestWord.length){
			longestWord = collect[i];
		};
	}
	return longestWord;
}

//8

const transmogrifier = (x, y, z) => {
	let prod = x * y;
	return Math.pow(prod, z);
}

//syntax

{} , curly braces define the object
const , objects are defined as constant variables
: , within an object, a colon separates a property and the value
of the corresponding property
. , in dot notation, a dot separating the name of an object and
that objects property can call a value
[] , in bracket notation, brackets can enclose an objects value
on the left side of an equation and the property on its right

//Me

const me = {};

me.name = 'Tom Murphy';
me.age = 28;
me.email = 'tom.louis.murphy@gmail.com';

me.name = 'Tom Murphy';

me['age'] = 1000;

me.age = 1000;

me['place of residence'] = 'north haven, connecticut';

//Slimer

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(monster.name);
monster.type = 'creature';
monster.age = 6;

//Ogres

const adventurer = {
	name: 'blayne',
	hitpoints: 100,
	weapon: 'wooden sword',
	woodenSwordAttack() {
		ogre.hitpoints -= 5;
		return 'Ogre now has ' + ogre.hitpoints + ' hit points.'
	}
}

const ogre = {
	name: 'stumpy',
	hitpoints: 500,
	weapon: 'big rock',
	rockAttack() {
		adventurer.hitpoints -= 50;
		return 'Adventurer now has ' + adventurer.hitpoints + ' hit points.'
	}
}

const battle = () => {
	while (adventurer.hitpoints > 0 && ogre.hitpoints > 0) {
		adventurer.woodenSwordAttack();
		ogre.rockAttack();
		console.log(adventurer.hitpoints);
		console.log(ogre.hitpoints);
	} if (adventurer.hitpoints <= 0) {
		return adventurer.name + ' fought bravely, but he has perished.'	
	} if (ogre.hitpoints <= 0) {
		return ogre + ' fought bravely, but he has perished.'
	}
}

//Cat Combinator

const cat1 = {
	name: 'scratch',
	breed: 'tabby',
	age: 6
}

console.log(cat1.age);
console.log(cat1.breed);

const cat2 = {
	name: 'patch',
	breed: 'persian',
	age: 8
}

const combineCats = (mama, papa) => {
	let cat3 = {};
	cat3.name = cat1.name + cat2.name;
	cat3.age = 1;
	cat3.breed = cat1.breed + '-' + cat2.breed;
	return cat3;
}