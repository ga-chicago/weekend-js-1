//Conceptual Questions
//1
const thisIsAVariable = 'Joe';


//2
let weAreGonnaChangeThisValue = 'Jill';
weAreGonnaChangeThisValue = 6;

//3
weAreGonnaChangeThisValue = thisIsAVariable;
console.log(weAreGonnaChangeThisValue);// should output joe


//Strings

//1

let firstVariable = 'Hello World';


firstVariable = 9;

let secondVariable = firstVariable;

secondVariable = 'omg';

console.log(firstVariable); //9

//2

const myName = 'Amjad';

console.log('Hello, my name is ' + myName);


// Booleans

 const a = 4;
 const b = 53;
 const c = 57;
 const d = 16;
 const e = 'Kevin';


 // output true

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a + b === c);
console.log(a * a === d);
console.log(e ==='Kevin');
console.log(48 == '48');

// The Farm

//1
const animal = 'cow';

if(animal === 'cow'){
	console.log('Moooo!');
//2
} else{console.log('You are not a cow.');}


// Drivers Ed
// 1
const age = 18;

if(age >= 16){
	console.log('Here are the keys.');

} else{console.log('Too young.');}



// Just loop it
//1
for (let i = 1; i <=10;i++){
	console.log(i);
}
//2

for (let i = 10; i <=400;i++){
	console.log(i);
}
//3

for (let i = 10; i <=400;i++){
	console.log(i);
	i++;
}


// Let's get even
//1
for (let i = 1; i <=100;i++){
	console.log(i);
//2	
	if(i % 2 === 0){
		console.log('Evevn Number');
	}
}


// Give Me Five
//1
for (let i = 1; i <=100;i++){
	console.log(i);

	if(i % 5 === 0){
		console.log('I found a ' + i + " .High five!!");
	}
	else if (i % 3 === 0){
		console.log('I found a ' + i + ' .Three is a crowd!');
	}
}


// Savings Account
//1

let sum = 0;

for (let i = 1; i<= 10; i ++){
	sum += i;	


}
console.log(sum);

// 2

let sum2 = 0;

for (let i = 1; i<= 100; i ++){
	sum2 += (i*2);	


}
console.log(sum2);


// Multiples of 3 and 5

//1

let sum3 = 0;

for (let i = 1; i < 1000; i ++){
	if(i % 3 === 0 || i % 5 === 0){
		sum3 += (i);	
	}


}
console.log(sum3);


// Easy Does it
// 1
const quotes = ['This is quote 1','This is quote 2','This is quote 3'];

//Random
const randomThings = [1, 10, "Hello", true];
// 1
 randomThings[0];
// 2
randomThings[2]= "World";
//3
console.log(randomThings);

// We've got class
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
// 1
ourClass[2];
//2
ourClass[2]="Octocat";
//3
ourClass.push('Cloud City');

console.log(ourClass);


// Mix it Up
const myArray = [5 ,10 ,500, 20]
//4
myArray.push("egon");
console.log(myArray);
//5
myArray.pop();

console.log(myArray);

//6

myArray.unshift('Bob Marley');

console.log(myArray);

// 7
myArray.shift();

console.log(myArray);

// 8

myArray.reverse();

console.log(myArray);


// Biggie Smalls
// 1
const num = 500;
if(num < 100){
	console.log('Little Number');

}
// 2
else{console.log('Big number');}

// Monkey in the Middle
// 1
if(num < 5){
	console.log('Little Number');
}
else if (num > 10){
	console.log('Big Number');
}
else{console.log('Monkey');}


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
console.log('Kristyn is wearing ' + kristynsCloset[2] + ' today.');


//2
// splice removes item but returns new array
const kristynShoe = kristynsCloset.splice(0,1)[0];

console.log(kristynShoe);

// 3

kristynsCloset.splice(6,0,'raybans');
console.log(kristynsCloset);

// 4
kristynsCloset[5] = "Stained Hat";
console.log(kristynsCloset);

// 5
console.log(thomsCloset[0][0]);
console.log(thomsCloset[1][0]);
console.log(thomsCloset[2][2]);

console.log('John is looking fierce in a ' + thomsCloset[0][0]+', ' + thomsCloset[1][0] + ' and ' + thomsCloset[2][2] + '. ' );


thomsCloset[1][2]="Footie Pajajmas";

console.log(thomsCloset);

// Functions
// printGreeting
const printGreeting = (name)=>{
	console.log('Hello there ' + name + '! ');
}

printGreeting('Slimer');

// reverseWordOrder

const reverseWordOrder = (str)=>{
	let reversed ='';
	let arrayAtSpace = str.split(' ');
	for(let i = 1; i <= arrayAtSpace.length; i ++){
			reversed += arrayAtSpace[arrayAtSpace.length-[i]]+' ';

		
	}
	return reversed;
}

console.log(reverseWordOrder('Hello world. Bye world'));


// Calculate
const calculate = (num1,num2,operation)=>{
	if(operation === "add"){
		return num1+num2;
	}
	else if(operation === 'sub'){
		return num1 - num2;	
	}
	else if(operation === 'div'){
		return num1/num2;
	}
	else if (operation === 'exp'){
		return Math.pow(num1,num2);
	}
}

console.log(calculate(7,2,'add'));
console.log(calculate(7,2,'sub'));
console.log(calculate(7,2,'div'));
console.log(calculate(7,2,'exp'));



//1
const printCool = (name) =>{
	console.log(name + ' is cool.');
}

printCool('MJ');

//2
const calculateCube = (num)=>{
	console.log(Math.pow(num,3));
}


calculateCube(5);

// 3

const isAVowel = (letter)=>{
	if(letter === "a"|| letter==="e"|| letter==="i"||letter==="o"||letter==="u"||letter === "A"|| letter==="E"|| letter==="I"||letter==="O"||letter==="U"){
		return true;
	}
	else{return false;}
}

console.log(isAVowel('E'));

// 4

const getTwoLengths=(str1,str2)=>{
	let numArray = [str1.length,str2.length];
	return numArray;
}

console.log(getTwoLengths('Hello','Universe'));


// 5

const getMultipleLengths = (array)=>{
	let numArray = [];
	
	for (let i = 0; i < array.length; i ++){
		numArray.push(array[i].length);
	}

	return numArray;
}
console.log(getMultipleLengths(['Hi','charlie','how','are','you']));

// 6

const maxOfThree = (num1,num2,num3)=>{
	let numArray =[];
	numArray[num1]=num1;
	numArray[num2]=num2;
	numArray[num3]=num3;
	return numArray[numArray.length - 1];
}


console.log(maxOfThree(444,98,72));


// 7

const printLongestWord = (array)=>{
	newWordArray = [];
	for(let i = 0; i < array.length; i ++){
		//to place in list before tie breaker
		if(newWordArray[array[i].length] !== undefined){
			newWordArray.splice(newWordArray[array[i].length],0,array[i]);
			console.log('There was a tie breaker, but here is the first one.')
		}
		else{
			newWordArray[array[i].length]=array[i];
		}	
	}
	return newWordArray[newWordArray.length-1];
}

console.log(printLongestWord(['Onomatopoeia','formation','of','embezzlement','sound']));

// 8
const transmogrify = (num1,num2,num3)=>{
	return Math.pow((num1*num2),num3);
}
console.log(transmogrify(5,3,2));



// Syntax


// {} curly braces define object
// eye color: 'Blue',  //Example of a property
//eye:   // example of key
//'Blue'  // example of value
//Objects can contain any datatype
//When they do they are called data structures
//object will not equal object because they have different addresses in your RAM
// You can access objects with dot notation or bracket notation
// to loop through an object, you have to use for ... in loop





// Me

const me = {};

me.name = 'Amjad';
me.age = 21;
me.email = 'amjad.hamdi.ali@gmail.com';

console.log(me);

console.log(me.name);
me.age = 1000;
console.log(me.age);

me['place of residence']='Burbank';

console.log(me);

console.log(me['place of residence']);


// Slimer

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(monster.name);

monster.type = 'Creature';

console.log(monster);

monster.age = '6';

console.log(monster);


// Ogres

const adventurer = {
	name:'David',
	belongings: ['helmet','sheild','sword','food'],
	hitpoints: 10,
	type:'human',
	age: 24,
	'sword swings': 25
};

const ogre = {
	name:'Shrek',
	type: 'ogre',
	age:104,
	characteristic: ['evil','ugly','sharp teeth'],
	residence: 'forest',
	hitpoints: 20
}


const battle = (obj1,obj2)=>{
	for (let i = 1; i <= obj1['sword swings']; i ++){
			obj2.hitpoints -=1;

			if(obj2.hitpoints === 0){
				obj1['sword swings'] = obj1['sword swings']-i;	
				console.log('Congratulations, you defeated the ogre!');
				console.log('You have ' + obj1['sword swings'] + ' sword swings remaining.');
				break;
			}

			else{
				console.log('No sword swings left. You did not defeat the ogre!')
			}
	}
}

battle(adventurer,ogre);




// Extra Stuff

const cat1 = {
	name: 'fluffy',
	breed: 'mane coon',
	age: 4
}


console.log(cat1.age);
console.log(cat1.breed);


const cat2 = {
	name: 'papa',
	breed: 'long hair',
	age: 9
}


const combineCats = (mama,papa)=>{
	console.log(mama);

	console.log(papa);


	return {
		name: mama.name + papa.name,
		age: 1,
		breed: mama.breed + '-'+ papa.breed
	}
}


console.log(combineCats(cat1,cat2));

// Recursion
console.log(combineCats(combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2)),combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2))))















