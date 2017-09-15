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








































