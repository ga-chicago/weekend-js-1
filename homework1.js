let variable = 1;
variable = 2;
const partyAllNight = variable;

let firstVariable = "Hello World";
firstVariable = 4;
let secondVariable = firstVariable;
secondVariable = "It's me again";
//value is 4;

myName = "Todd Herskovitz";
console.log("Hello my name is " + myName);

a < b
c > d
'name' === 'name'
a < b < c
a === a < d
e === 'kevin'
48 !== '48'

if (animal === "cow") {console.log("moooo");}
else {console.log("u r not a cow");}

age = 17;
if (age >= 16) {console.log("here are the keys");}
else {console.log("sorry too young");}

for (let i = 0; i <= 10; i++) { console.log(i);}
for (let i = 10; i <= 4000; i++) { console.log(i);}
for (let i = 10; i <= 4000; i+=2) { console.log(i);}

for (let i = 2; i <= 100; i+=2) { console.log(i + " is an even number");}


for (let i = 5; i <= 100; i+=5) { console.log("i found a " + i + ". high five!");}

for (let i = 0; i <= 100; i++) { 
if ( i % 3 == 0) {console.log("this is " i + ". 3 is a crowd");}
if ( i % 5 == 0) { console.log("i found a " + i + ". high five!");}x
}

const array = [1,2,3,4,5,6,7,8,9,10];
bankAccount = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

let accumulator = 0;
for (let i = 0; i <= 100; i++) { accumulator += i;}
bankAccount = accumulator * 2

let accumulator = 0;
for (let i = 0; i < 1000; i++) { 
if ( i % 3 == 0) { accumulator += i;}
if ( i % 5 == 0) { accumulator += i;}
}

const randomThings = [1, 10, "Hello", true]
randomThings[0]
randomThings[2] = "World";
randomThings[2]

const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
ourClass[2]
ourClass.push("Egon")
ourClass.pop()
ourClass.unshift("Bob Marley")
ourClass.shift();
ourClass.reverse();

if (variable < 100) {console.log("little number")} else {console.log("big number")}

if (variable < 5) {console.log("little number")} 
else if (variable > 10) {console.log("big number")}
else {console.log("monkey")}

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

console.log("Kristyn's rocking that " + kristynsCloset[2] " today!")
kristynsCloset.shift();
kristynsCloset.splice(6, "Raybans")
kristynsCloset[5] = "stained knit hat"


thomsCloset[0][0]
thomsCloset[1][1]
thomsCloset[2][1]
thomsCloset[1][2] = "footie pajamas"

const printGreeting = (name) => {
return "hello " + name + "."
}

const reverseWordOrder = (string) => {
return string.split(" ").reverse().join(" ");
}

const calculate = (num1, num2, operation) => {
if (operation === "add") {return num1 + num2}
if (operation === "sub") {return num1 + num2}
if (operation === "mult") {return num1 * num2}
if (operation === "div") {return num1 / num2}
if (operation === "exp") {return Math.pow(4,3)}
}

const printGreeting = (Name) => {
return Name + " is cool."
}

const weCanCubeThat = (Number) => {
return Math.pow(Number,3)
}

const vowels = ["a","e","i","o","u","y","A","E","I","O","U","Y"];

const isAVowel = (Letter) => {
if ( vowels.indexOf(Letter) >= 0 ) {return "Yeah that's a vowel."}
else {return "oh that? naw that's not a vowel"}
}


const stringLength = (String1, String2) => {
return [String1.length, String2.length]
}

const multipleStringLength = (array) => {
let lengths = [];
for (i = 0; i < array.length; i ++) {lengths.push(array[i].length);}
return lengths
}

const maxOfThree = (one, two, three) => {
function compareNumbers(a, b) {return b - a;}
let array = [one, two, three];
return array.sort(compareNumbers)[0];
}

const longest = (array) => {
function compareLength(a, b) {return b.length - a.length;}
return array.sort(compareLength)[0];
}


const transmogrifier = (one, two, three) => {
	return Math.pow((one * two), three)
};

const object = {		// make an unchanging object called object initialize with =,  opens with braces
property1: 69,			// add property called property1 which is a number 69, next with commq
property2: "whatever"	//add property called property2 which is a string 'whatever' end with semicolon
}						// close with braces

const me = {
name: "Todd",
age: 27,
email: "todd.hersko@gmail.com"
}

me.name;
me.age = 1000;
me.age;
me["place of residence"] = "Chicago";
me["place of residence"];


const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

const swashbuckler {
hp: 30;
damage_min: 3;
damage_max: 10;
def: 15;
att: 5;
}

const barbarian {
hp: 60;
damage_min: 6;
damage_max: 15;
def: 10;
att: 5;
}