//##Conceptual Questions

//1. How do we assign a value to a variable
//


//##Strings

// 1.
let firstVar = "Hello World";

parseInt(firstVariable, 10);

const secondVariable = firstVariable;

secondVariable.toString();

console.log(firstVariable);

	//firstVariable returns "Hello World"

// 2.

const yourName = "Myka"

const greeting = "Hello, my name is " + yourName


// ## Boolens

a < b;
c > d;
'Name' === 'Name';
a < b || c;
a <= a < c;
e === 'Kevin'
48 !== '48'

// ## The Farm

// 1.

if (animal === "cow") {
	return "Mooooo"
}

// 2. 

if (animal === "cow") {
	console.log("Mooooo")
} else {
	console.log("Hey! You're not a cow")
}

//## Driver's Ed

// 1. 
let agePerson;

// 2. 

if (agePerson >= 16) {
	return "Here are the keys";
}

// 3.

if (agePerson >= 16) {
	console.log("Here are the keys");
} else {
	console.log("Sorry you are too young");
}

//## Just Loop It

// 1. 

for (let n = 0; n <= 10; n++) {
	console.log(n);
}

// 2.

for (let n = 10; n <= 4000; n++) {
	console.log(n);
}

// 3.

for (let n = 10; n <= 4000; n += 2) {
	console.log(n);
}

//## Let's Get Even

// 1. 

for (let n = 1; n <= 100; n++) {
	if (n%2 === 0){
		console.log(n);
	}
};

// 2.

for (let n = 1; n <= 100; n++) {
	if (n%2 === 0){
		console.log(n + " is an even number");
	}
};

//## Five me Five

// 1.

for (let n = 0; n <= 100; n++){
	if (n%5 === 0){}
	console.log(`I found a ${n}. High five!`)
	}
};

// 2.

for (let n = 0; n <= 100; n++){
	
	if (n%5 === 0 && n%3 === 0){
	console.log(`I found a ${n}. High five, though three's a crowd.`)
	} else if (n%5 === 0){
	console.log(`I found a ${n}. High five!`)
	} else if (n%3 === 0){
	console.log(`I found a ${n}. Three's a crowd.`)
	};
};

//## Savings account

// 1.

let balance = 0;

for (n = 1; n <= 10; n++) {
	balance =  balance + n;
};

console.log("$" + balance);

// 2.

let balance = 0;

for (n = 1; n<= 100; n++){
	balance = (balance + n);
}

balance = balance * 2;

console.log("$" + balance);

//## Multiples of 3 and 5

let total = 0;

for (n = 1; n < 1000; n++){
	if (n%3 === 0 || n%5 === 0){
		total = total + n;
	};
};
console.log(total);

//### Easy Does It

// 1.

const quotes = ["I was born in Iowa, I only work in outer space", 
			 "I have been, and ever shall be, your friend", 
			 "Dammit Jim! I'm a doctor, not a bricklayer!"]


//### Random

// 1.

randomThings[0];

// 2.

randomThings[2] = "World";

// 3.

randomThings[2];


//## We've Got Class

// 1.

ourClass[2];

// 2.

ourClass[2] = "Octocat";

// 3.

ourClass.push("Cloud City");

//## Mix It Up

// 1.

myArray.push("Egon");

// 2.

myArray.pop();

// 3.

myArray.unshift("Bob Marley");

// 4.

myArray.shift();

// 5.

myArray.reverse();


//### Biggie Smalls

if (n < 100) {
	console.log("little number");
} else {
	console.log("big number");
}

//### Monkey in the Middle


if (n < 5) {
	console.log("little number");
} else if (n > 10) {
	console.log("big number");
} else {
	console.log("monkey");
}


//### What's in Your Closet

// 1. 

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!" );

// 2.

const kristynShoe = kristynsCloset.shift();

// 3.

kristynsCloset.push("raybans");

// 4.

kristynsCloset.splice(5, 0, "stained knit hat");

// 5.

thomsCloset[0][0];

// 6. 

thomsCloset[1][1];

// 7.

thomsCloset[2][1];

// 8.

console.log(`Thom is looking sharp in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][1]}!`);

// 9.

thomsCloset[1][2] = "Footie Pajamas";


//## Functions

//### printGreeting

const printGreeting = (name) => {
	console.log("Hello there, " + name + "!");
};


//### reverseWordOrder

const reverseWordOrder = (newString) => {
	console.log(newString.split(" ").reverse().join(" "));
};


//### calculate

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
		return Math.pow(num1, num2);
	};
};



//## No Title

// 1.

const printCool = (name) => {
	return name + " is cool";
};

// 2.

const calculateCube = (number) => {
	return Math.pow(number, 3);
};

// 3.

const isAVowel = (letter) => {
	if (letter === "a" || letter === "A" || letter === "e" || letter === "E" || letter === "i" || 
		letter === "I" || letter === "o" || letter === "O" || letter === "u" || letter === "U") {
		return true;
	} else {
		return false;
};
};

// 4.

const getTwoLengths = (string1, string2) => {
	return [string1.length, string2.length];
};

// 5.

const getMultipleLengths = (arrStrings) => {
	const arrLength = []

	for (let i =0; i <= arrStrings.length -1 ; i++){
		arrLength.push(arrStrings[i].length);
	};
	
	return arrLength;
};

// 6.

const maxOfThree = (num1, num2, num3) => {
	const threeRay = [num1, num2, num3];
	threeRay.sort(function compareNumbers(a,b){return a - b;});
	return threeRay[maxOfThree.length - 1];
}

// 7.

const printLongestWord = (arrStrings) => {

	const compLength = arrStrings;

	compLength.sort(function compareNumbers(a,b){return a.length - b.length});

	if (compLength[compLength.length - 1] === compLength[compLength.length - 2]){
		if (arrStrings.indexof(compLength[compLength.length - 1]) < arrStrings.indexof(compLength[complength.length - 1])){
			return compLength[compLength.length - 1];
		} else {
			return compLength[compLength.length - 2];
		};
	} else {
		return compLength[compLength.length - 1];
	};

};

// 8.

const transmogrify = (num1, num2, num3) => {
	return Math.pow(num1 * num2, num3);
};


//### Objects
//## Syntax


//##Me

// 1.

const me 

// 2.

const me = {
	name: "Myka",
	age: 36, 
	email: "mykamart@gmail.com"
};

// 3.

me.name

// 4.

me.age = 1000;

// 5.

me.age

// 6.

me["place of residence"] = "Chicago";

// 7.

me["place of residence"]


//## Slimer

// 1.

monster.name

// 2.

monster.type = "creature";

// 3.

monster.age = 6

// 4.

console.log(monster)


//## Ogres

const adventurer = {
	name: "Morgana",
	hitpoints: 12,
	gold: 9,
	weapon: "longsword",
	damage: 3,
	initiative: false
};

const ogre = {
	name: "Rawrg",
	hitpoints: 12,
	gold: 2,
	weapon: "melee",
	damage: 3,
	initiative: false
};

let atkOutcome = 0
let initOutcome = 0

const battle = () => {

	const attack = () => {
		atkOutcome = Math.floor((Math.random() * 2) + 1);	// 1=miss, 2=hit
	}

	const ogrDmg = () => {
		adventurer.hitpoints = adventurer.hitpoints - ogre.damage;
	}

	const advDmg = () => {
		ogre.hitpoints = ogre.hitpoints - adventurer.damage;
	}

	const initWinner = () => {
		initOutcome = Math.floor((Math.random() * 2) + 1); //ogre wins init on 1, adventurer on 2
	}

	const reset = () => {
	adventurer.hitpoints = 12
	ogre.hitpoints = 12
}		
	const firstAttack = () => {
		initWinner()
		if (initOutcome === 1){ 
			adventurer.initiative = true;
			console.log("Ogre has initiative");
			attack();
			if (atkOutcome === 1){
				console.log(ogre.name + " misses");
			} else {
				ogrDmg();
				console.log(ogre.name + " does " + ogre.damage + " damage");
			};
		} else if (initOutcome === 2) {
			ogre.initiative = true 
			console.log("Morgana has initiative");
			attack();
			if (atkOutcome === 1){
				console.log(adventurer.name + " misses");
			} else {
				advDmg();
				console.log(adventurer.name + " does " + adventurer.damage + " damage");
			};
		};
	};

	const rounds = () => {
		if (ogre.initiative === true){
			while(adventurer.hitpoints > 0 && ogre.hitpoints > 0){

				//Ogre's attacks
				attack();
				if (atkOutcome === 1){
					console.log(ogre.name + " misses");
				} else {
					ogrDmg();
					console.log(ogre.name + " does " + ogre.damage + " damage");
				};
				console.log(`End of round - ${adventurer.name}: ${adventurer.hitpoints}hp, ${ogre.name}: ${ogre.hitpoints}hp`);
				//Adventurer's attacks
				attack();
				if (atkOutcome === 1){
					console.log(adventurer.name + " misses");
				} else {
					advDmg();
					console.log(adventurer.name + " does " + adventurer.damage + " damage");
				};
			}; 
		} else if (adventurer.initiative === true) {
			while(adventurer.hitpoints > 0 && ogre.hitpoints > 0);{
				//Adventurer's attacks
				attack();
				if (atkOutcome === 1){
					console.log(adventurer.name + " misses");
				} else {
					advDmg();
					console.log(adventurer.name + " does " + adventurer.damage + " damage");
				};
				console.log(`End of round - ${adventurer.name}: ${adventurer.hitpoints}hp, ${ogre.name}: ${ogre.hitpoints}hp`);
				//Ogre's attacks
				attack();
				if (atkOutcome === 1){
					console.log(ogre.name + " misses");
				} else {
					ogrDmg();
					console.log(ogre.name + " does " + ogre.damage + " damage");
				};
			}; 
		};

		if (ogre.hitpoints <= 0){
			alert(adventurer.name + " is victorious!");
		} else {
			alert(ogre.name + " has defeated you.");
		};
	};
	firstAttack();
	rounds();
	reset()
};







