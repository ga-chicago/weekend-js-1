//1How do we assign a value to a variable?
let or const and giving a name
	ex: let age;
	age = 3;

//2How do we change the value of a variable?

//using the variable globally can easly be 
//changed in a function by using the name and giving a different value

//3How do we assign an existing variable to a new variable?
//setting a new variable equal to the last variabl

//STRINGS

let firstVariable = ['Hello World']
parseInt(firstVariable)
let secondVariable = firstVariable
secondVariable.toString();
console.log(secondVariable);
//string


//2

let yourName = ['jeff']
console.log('Hello, my name is ' + yourName)

//Booleans
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';


-  a < b;
-  c > d;
-  'Name' = 'Name';
-  a < b < c;
-  a = a < d;
-  e = 'Kevin';
-  48 =='48';


//Farm

let animal = 'cow'
if(animal === 'cow'){
	console.log('sup cow')
}else{
	console.log('no cow')
}
console.log(animal)

//Drivers ed

let age = 16;
if (age >= 16){
	console.log('Here are the keys')
} else if(age < 16){
	console.log('Sorry you are too young')
};

//Just loop it
//1
for (let i = 0; i <= 10; i++)
console.log([i])

//2
for (let i = 10; i <= 4000; i++)
console.log([i])


//3
for(let i = 10; i <= 4000; i++)
	if(i % 2 === 0)
		console.log([i])

//Lets get even
for(let i = 1; i <= 100; i++)
if(i % 2 == 0){
	console.log(i + ' is an even number')
}

//Give me five
for(let i = 0; i <= 100; i++){
	if(i % 5 === 0){
		console.log(' I found a number ' + i + ' high five')
	}else if(i % 3 === 0){
		console.log(' I found a ' + i + ' three is a crowd')
	};
};

// Savings account
//1
let bankAccount = 0;
for (i = 1; i <= 10; i++){
	console.log(bankAccount += i)
}
//2
let bankAccount = 0;
for (i = 1; i <= 100; i++){
	console.log(bankAccount += i * 2)
}



//Euler
let sum = 0;
for (i = 1; i < 1000; i++){
	if(i % 3 === 0 || i % 5 === 0){
		console.log(sum += i)
	}
}

//Easy does it

const quotes = ['', '', '']

//Random

const randomThings = [1, 10, 'Hello', true]

const access = randomThings[2];

randomThings[2] = 'World';

console.log(randomThings)

//We've got class

const ourClass = ['Gizmo', 'Zoom', 'Github', 'Slack']

const access = ourClass[2];

ourClass[2] = 'Octocat';

ourClass.push('Cloud City');

console.log(ourClass)


//mix it up

const myArray = [5,10,500,20]

myArray.push('Egon')

myArray.pop()

myArray.unshift('Bob Marley')

myArray.shift()

myArray.reverse()

console.log(myArray)


//Biggie Smalls

let number = 0;

if (number < 100){
	console.log('little number')
}else if(number > 100){
	alert('big number')
}

//Monkey in the middle

const number = 7;

if (number < 5){
	console.log('little number')
}else if(number > 10){
	console.log('big number')
}else{
	console.log('monkey')
}

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

const rocking = ('Kristyn is rocking that ' + kristynsCloset[2] + ' today')
console.log(rocking)

kristynsCloset.shift();

kristynsCloset.splice(5, 0, 'raybans')

kristynsCloset[5] = "Stained knit hat";

thomsCloset[0]
console.log(shirts)

thomsCloset[1][0]

thomsCloset[2][2]

const wearing = ('thom is looking fierce in a ' + thomsCloset[0][0] + ' and ' + thomsCloset[1][0])
console.log(wearing)

thomsCloset[1][2] = 'footie pjs';


//FUNCTIONS

const printGreeting = (name) =>{
	return "hey there " + name

} 
printGreeting('jeff')

//reverse word
const word = 'these are words'

const reverseWord = (string) =>{ 
	return string.split(' ').reverse().join(' ')
	
}
reverseWord('hey now what up')

//calculate


const calculate = (num1,num2,string) =>{
	if(string === 'add'){
		console.log(num1 += num2)
	
	}else if(string === 'sub'){
		console.log(num1 -= num2)
	
	}else if(string === 'multi'){
		console.log(num1 *= num2)
	
	}else if(string === 'div'){
		console.log(num1 %= num2)
	
	}else if(string === 'exp'){
		console.log(Math.pow (num1, num2))
	}

}

(calculate(4, 3, "sub")
calculate(4, 3, "exp")

//1 print 

const printCool = (name) =>{
	return name + " is sooo cool"
}
printCool('Jeff')


//2

const calculateCube = (cube) =>{
	return Math.pow(cube, 3)
}

calculateCube(5)

//3
const isAVowel = (someString) =>{
	if(someString === 'a'){
		console.log(true)
	}if(someString === 'e'){
		console.log(true)
	}if(someString === 'i'){
		console.log(true)
	}if(someString === 'o'){
		console.log(true)
	}if(someString ==='u'){
		console.log(true)
	}else{
		console.log(false)
	}
};

isAVowel("c")

//4

let newArray = [];

const getTwoLengths = (oneLength,secondLength) =>{
	
	newArray.push(oneLength.length, secondLength.length)
	return newArray
}


getTwoLengths("Hank", "Hippopopalous")


//5

let newArray = ['']

const getMultipleLengths = (arrayOfStrings) =>{

	newArray.push(arrayOfStrings.length)

	
	return newArray
	
	
}



getMultipleLengths(["hello", "what", "is", "up", "dude"])
	

//6

const maxOfThree = (x,y,z) =>{
	return Math.max(x,y,z)
}



maxOfThree(6, 9, 1)




//7
const printLongestWord = (anArrayOfStrings) =>{
	let longestword = '';
	for(let i = 0; i < anArrayOfStrings.length; i++){
		if (anArrayOfStrings[i].length >= longestword.length){
			longestword = anArrayOfStrings[i]
		}
	}
	return longestword
}


printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])


//8

const transmogrify = (x,y,z) =>{

return Math.pow(x*y,z)

}


transmogrify(5, 3, 2)




////OBJECTS

//List and describe each
// individual piece of syntax that we use to
// construct an object. Don't leave anything out! 
//The list is finite.

// const is the variable name
// = is what the the variable properites are set to
// {} define the object
//then theres the property  name
//: is the value of the property
//


//ME

//1. Create an empty object called `me`.<br>
//2. Assign it properties for
// **name**, **age**, and **email** with 
//corresponding values.<br>

const me = {
	name: 'jeff',
	age: 28,
	email: 'j@gmail.com'
}

console.log(me)

//3. Using dot notation, 
//access the **name** property in your object.

console.log(me.name)

//4. Without writing directly into the object, 
//update the value of **age** to be 1000 years old.

me.age = 1000

//5. Using dot notation, 
//verify that **age** has been updated

me.age

//6
//Add a key to this object called:
 //"place of residence" and give it a value of your 
 //hometown. Note that the key has spaces, 
 //therefore you cannot use dot notation.
 //Access the value of "place of residence"

 me['place of residence'] = 'Georgia';



//Slimer

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasma or ghost or something"
}

 //What would you write to 
 //access the `name` and console.log it?

 console.log(monster.name)

 //What would you write to change the 
 //`type` to 'creature' (without changing 
 //it inside the object)


monster.type = 'creature';


//What would you write to add 
//a key to the object called `age`, and set the age to 6?

monster['age'] = 6;


console.log(monster)



//Ogres

//## Ogres

//Let's say you want to make an adventure game where you are an adventurer and you are going to fight **ogres**.

//Using **objects**, create **models** and have them interact.

// * how would you model your `adventurer`? Your adventurer will want a **name** and **hitpoints**. 
// What else would your adventurer need?
// * how would you model an `ogre`? Your ogre will want **hitpoints**.

// * Write a very small program that will simulate a battle between your adventurer and an ogre.
//  You can use the same techniques you used in your **landscaping** game from the weekend.
// 	* When your adventurer's hitpoints reach 0 the game is over.
// 	* When your ogre's hitpoints reach 0 the game is over.

// * If you want to provide input to the game, you can run it in the Chrome 
// console (but that isn't strictly necessary for now)

const adventurer = {
	name: 'day man',
	armor: 'cloak',
	skill: 'friendship',
	hitpoints: 10
}

const ogre = {
	name: 'night man',
	armor: 'leather',
	skill: ' caw call',
	hitpoints: 10
}



const mamaCat = {
	name: 'jill',
	breed: 'persian',
	age: 3 
}

console.log(mamaCat.age)
console.log(mamaCat.breed)

const papaCat = {
	name: 'jack',
	breed: 'siamese',
	age: 4
}

const combineCats = (cat1,cat2) =>{

}

console.log(a,b)























