//Concept
// 1
const newVar = variable;

// 2
newVar = newVariable;

//3
const newestVar = newVar;

//Strings
//1
let firstVariable = 'Hello World';
firstVariable = 2;
let secondVariable = firstVariable;
secondVariable = 'string';
firstVariable is 2

//2
const yourName = 'Collin Cromwell';
const nameString = `Hello, my name is ${yourName}`;

//Bool
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

a !== b;
c !== d;
'Name' === 'Name';
a + b === c;
e === 'Kevin';
48 == '48';

//The Farm
animal = 'bear';
if(animal === 'cow')
	console.log('mooo');
else
	console.log("You're not a cow");

// Drivers Ed
const age = 25;

if(age > 15)
	console.log('Here are the keys')
else if(age < 16)
	console.log("Sorry you're too young");

//Loops
//1
for(let i = 0; i < 11; i++)
	console.log(i);
//2
for(let i = 10; i < 4001; i++)
	console.log(i);
//3
for(let i = 10; i < 4001; i++)
	if(!(i%2))
		console.log(i);

//lets get even
//1
for(let i = 1; i < 101; i++)
	if(!(i%2))
		console.log(`${i} is an even number`);

//give me 5
//1
for(let i = 0; i < 101; i++){
	if(!(i%5))
		console.log(`I found a ${i}. High five!`);
	if(!(i%3))
		console.log(`I found a ${i}. Three is a crowd`)
}


//savings act
//1
let bankAcct = 0;
for(let i = 1; i < 11; i++)
	bankAcct += i;
//2
bankAcct = 0;
for(let i = 1; i < 101; i++)
	bankAcct += i*2;

//multiples of 3 and 5
let sum = 0;
for(let i = 0; i < 1000; i++)
	if(!(i%3) || !(i%5))
		sum += i;

//easy does it

const quotes = ['this is a quoute', 'also a quote','im so witty'];

//Random
//1
const randomThings = [1, 10, 'Hello', true];
randomThings[0];
randomThings[2] = 'World';
console.log(randomThings[2]);

//weve got class
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];
ourClass[2];
ourClass[2] = 'Octocat';
ourClass.push('Cloud City');

//mix it up
const myArr = [5, 10, 500, 20];
myArr.push('Egon');
myArr.pop();
myArr.unshift('Bob Marley');
myArr.shift();
myArr.reverse();

//Biggie Smalls
if(num < 100)
	console.log('little number');
else
	alert('big number');

//Monkey in the Middle
if(num < 5)
	console.log('little number');
else if(num > 10)
	console.log('big number');
else
	console.log('monkey');

//Whats in your closet
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
//1
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today`);
//2
kristynShoe = kristynsCloset.shift();
//3
kristynsCloset.splice(5, 0, 'raybans');
//4
kristynsCloset[4] = 'stained knit hat';
//5
thomsCloset[0][0];
//6
thomsCloset[1][2];
//7
thomsCloset[2][1];
//8
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} ${thomsCloset[2][1]}!`);
//9
thomsCloset[1][2] = 'Footie PJs';

//FUNCTIONS

//printGreeting
const printGreeting = (name) => {
	return `Hello there ${name}`;
}

//reverse word order
const reverseWordOrder = (s) => {
	return s.split(' ').reverse.join(' ');
}

//Calculate
const calculate = (n1, n2, s) => {
	if(s === 'add')
		return n1 + n2;
	if(s === 'sub')
		return n1 - n2;
	if(s === 'mult')
		return n1 * n2;
	if(s === div)
		return n1 / n2;
	if(s === exp)
		return Math.pow(n1, n2);
}

//1
const printCool = (name) => {
	return `${name} is cool`;
}

//2
const calculateCube = (n) => {
	return Math.pow(n,3);
}

//3
const isAVowel = (c) => {
	c = c.toLowerCase();
	return (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' || c === 'y');
}

//4
const getTwoLengths = (s1, s2) => {
	arr = [];
	arr.push(s1.length);
	arr.push(s2.length);
	return arr;
}

//5
const getMultipleLengths = (sArr) => {
	arr = [];
	for(let i = 0; i < sArr.length; i++)
		arr.push(sArr[i].length);
	return arr;
}

//6
const maxOfThree = (n1,n2,n3) => {
	arr = [n1,n2,n3];
	arr.sort();
	return arr[2];
}

//7
const printLongestWord = (sArr) => {
	longestWord = ''
	for(let i = 0; i < sArr.length; i++)
		if(sArr[i].length > longestWord.length)
			longestWord = sArr[i];
	return longestWord;
}
//8
const transmogrify = (n1,n2,n3) => {
	return Math.pow(n1*n2,n3);
}

//OBJECTS
{} define an Object
. and [] let you get values of keys in the Object
: seperates the keys and values
, seperates the keys from each maxOfThree

//me 

const me = {
	name: 'collin',
	age: 25,
	email: 'butts@gmail.com',
}

//3
me.name;
me.age = 1000;
console.log(me.age);
me['place of residence'] = 'Royal Oak';
me['place of residence'];

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(monster.name);
monster.type = 'scurry'
monster['age'] = 6;
console.log(monster);

const adventurer = {
	name: 'collin',
	hitpoints: 1000,
	weapons: 'swords',
	isGood: true,
	damage: 30,
}

const orge = {
	hitpoints: 10,
	weapons: 'clubs',
	isGood: false,
	damage: 10,
}

const battle = (o1, o2) => {
	while(o1.hitpoints <== 0 || o2.hitpoints <== 0){
		o1.hitpoints -= o2.damage;
		o2.hitpoints -= o1.damage;
	}
}

//extra stuff

const cat = {
	name: 'orion',
	breed: 'black',
	age: 3,
}

console.log(cat.age);
console.log(cat.breed);

const otherCat = {
	name: 'puss',
	breed: 'boots',
	age: 5,
}

const combineCat = (mama, papa) => {
	const baby = {}
	baby['name'] = mama['name'] + papa['name'];
	baby['breed'] = mama['breed'] + '-' + papa['breed'];
	baby['age'] = 1;
	return baby;
}
console.log(combineCat(combineCat(combineCat(cat,otherCat),combineCat(cat,otherCat))),combineCat(combineCat(cat,otherCat),combineCat(cat,otherCat)));


