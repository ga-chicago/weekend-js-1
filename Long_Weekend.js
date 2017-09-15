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


