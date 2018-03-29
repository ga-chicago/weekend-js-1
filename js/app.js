console.log("friday homework")


//#1 How do we assign a value to a variable?
you can assign value using let, const, or var 



//#2 How do we change the value of a variable?

you can change the value of a variable using only let 
const will not allow you to reasign the value

//#3 How do we assign an existing variable to a new variable?
let hope = a;

if (a === 1) {
  let hope = c;
 
}



//#4 Create a variable called `firstVariable`.
  //- assign it the value of a string => `"Hello World"`
let firstVariable = ("Hello World") 
console.log(firstVariable);
Hello World
undefined
// - change the value of this variable to a number.
firstVariable = 6
6
// - store the value of `firstVariable` into a new variable called `secondVariable` 
let secondVariable = (firstVariable);
// - change the value of `secondVariable` to a string.  
secondVariable = ''
""
// - What is the value of `firstVariable`?
firstVariable
6

///#5 Create a variable called `yourName` and 
//set it equal to your name as a string.
let yourName = ("Noemi") 
 console.log(yourName);
//- Write an expression that takes the string 
//"Hello, my name is " and the variable `yourName` 
console.log("Hello my name is" + ' ' + yourName);

//so that it returns a new string with them concatenated. 
//>ex: `Hello, my name is Jean Valjean`
///////////////////////////
let yourName = ("Noemi") 
 console.log(yourName);
Noemi
undefined
console.log("Hello my name is" + ' ' + yourName);
Hello my name is Noemi
undefined
  //funt 2 parameter 1 with a string an one name

///#6 Using the provided variable definitions, 
//replace the blanks with a mathematical or 
//boolean operator that evaluates the expression to true. 
//:wave:
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

console.log(a < b); //console.log(a < b); true undefined
// a _ b;
console.log(c > d); //console.log(c > d); true. undefined
// c _ d;
console.log('Name' === 'Name'); //console.log('Name' === 'Name');true undefined
// 'Name' ___ 'Name';
console.log((a + b) === c); //console.log((a + b) === c); true
// a _ b ___ c;
console.log((a * a) === d);//console.log((a * a) === d); true
// a _ a ___ d;
console.log(e === 'Kevin'); //console.log(e === 'Kevin');  true
// e ___ 'Kevin';
console.log(48 == '48'); ///console.log(48 == '48'); true
// 48 ___ '48';

///#7 The Farm
//1) Write code that will print out "mooooo" 
//if the variable `animal` is equal to `cow`.
//2) Change your code so that if the variable `animal` 
//is anything other than a cow, 
//your should print out "Hey! You're not a cow."
let animal = ('cow') => {
  console.log(animal);
} if(animal = cow) {
  console.log("mooooo");
} else if (animal != cow){
 console.log("Hey you are not a cow");
}
////////
const animal = ('cow'); 
console.log(animal);
if(animal = cow){
  console.log("mooooo")
}else if (animal != cow){
 console.log("Hey you are not a cow")
 
}

///#8## Driver's Ed
//1) Write a variable that will hold a person's age.
//2) Write code that will print out "Here are the keys", 
//if the age is 16 years or older.
//3)Change your code so that if the age is younger than 16, 
//a message will print "Sorry, you're too young."
let personAge = 16;
  if (personAge <= 16){
  console.log("Here are the keys")
}else if(personAge > 16){
console.log("Sorry, you're too young")
} 
Here are the keys
///
const personAge = 16;
console.log(personAge)
  if (personAge <= 16){
  console.log("Here are the keys")
}else if(personAge > 16){
console.log("Sorry, you're too young")
}
16 
///

let personAge = 16; {
console.log(personAge);
}if (personAge <= 16){
  console.log("Here are the keys")
}else if(personAge > 16){
console.log("Sorry, you're too young")
} 
VM9110:2 16
VM9110:4 Here are the keys










////#9 ## Just Loop It
// 1) Write code that will print out 
// all the numbers in the range 0 - 10.
const N = 11; 
Array.apply(null, {length: N}).map(Number.call, Number)

(11) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 2) Write code that will print out 
// all the numbers in the range 10 - 4000.
const N = 4000; 
Array.apply(null, {length: N}).map(Number.call, Number)
// 3) Write code that will print out 
// every other number in the range 10 - 4000.
let line = 100;
let j = -1;
for (i = 0; i <= 4000; i++) {
    if (i % 2 == 1) {
        j++;
        if (j % 3 == 0) {
            alert(i);
        }
    }


 }

///////////////////
let line = [];
//you are uninterested in odd numbers, so increment the counter by 2
for(let i = 0; i <= 4000; i = i + 2) {
    line.push(i);
    if((i + 2) % 5 === 0) { //every 5 lines print result
        console.log(line);
        line = []
    }
}


////#10## Let's get even
// ## Let's get even
// 1) Print out the even numbers that are within the range of 1 - 100.
let line=[]

for (let i = 2; i <= 100; i += 2) {
  if (line.length == 5) {   //this prints out the even numbers by five
    console.log(line);
    line=[];
  }
  line.push(i);
}
console.log(line);

///
let line = [];
for (let i = 2; i <= 100; i += 2) {
  if (line.length == 1) {   //this prints out all the even numbers by one
    console.log(line);
    line=[];
  }
  line.push(i);
}
console.log(line);
// 2) Adjust your code to add a message next to the even number that says:
// "is an even number".

// >Example Output:
// ```
// 2 is an even number
// 4 is an even number
// 6 is an even number

let line = [];
//you are uninterested in odd numbers, so increment the counter by 2
for(let i = 0; i <= 4000; i = i + 2) {
    line.push(i);
    if((i + 2) % 5 === 0) { //every 5 lines print result
        console.log(line);
        line = []
    }
}

///////////////////////////////////////////////////
const num = [];
for(let i=0; i <= 100; i++){
  console.log(num[i])
  if (numb[i] %2 === 0){
    console.log(numb[i] + "is even")
    else{
      console.log(numb[i] + 'is odd')

    }

}




//#11 ## Give me Five
// 1) For the numbers 0 - 100, print out "I found a `number`. 
//High five!" if the number is a multiple of five.

// >Example Output:
// ```
function solution(number) {
   let num = 0;
    for (let i = 0; i < number; i++)
    {
      if (i % 3 === 0)
        console.log("I found a `number` High five!") 
      else if(i % 5 === 0)
        console.log()
        {
        

// I found a 5. High five!
// I found a 10. High five!
const N = [100] => {
 for (i % 2; i = 0){
  console.log(i + "I found a `number`. High five!");
}  

// 2) Add to the code from above to print out 
//"I found a `number`. Three is a crowd" if the number is a multiple of three.

// >Example Output:
// ```
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!




// //#12 ## Savings account
// 1) Write code that will save the sum of all the numbers 
//between 1 - 10 to a variable called `bank_account`.
// >Check your work! Your banck_account should have $55 in it.
// 2) You got a bonus! Your pay is now doubled each week. 
//Write code that will save the sum of all the numbers 
//between 1 - 100 multiplied by 2.
// >Check your work! Your banck_account should have $10,100 in it.

let bank_account = [0];
let sum = (num1, num2) => {
  console.log(sum)
bank_account = sum;
}
for (i =0; i < 55; i++);
if(i <= 55) 



//////#13 ## Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
let sum = 0;
for (let x = 0; x < 10; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);
 23
undefined





// Find the sum of all the multiples of 3 or 5 below 1000.
// :clap: You just solved [Project Euler](https://projecteuler.net/problem=1) 
//problem 1! :clap:
let sum = 0;
for (let x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);
233168
undefined



///////#14 ### Easy Does It
// 1. Create an array that contains three quotes 
//and store it in a variable called `quotes`.
const quotes = ['', '', ''];
console.log(quotes);

//////
const quotes = ['really nice', 'good try', 'almost there'];
console.log(quotes);
(3) ["really nice", "good try", "almost there"]
undefined


// #15 ### Random
// Given the following array `const randomThings = [1, 10, "Hello", true]`
const randomThings = [1, 10, "Hello", true];
// 1. how do you access the 1st element in the array?
console.log(randomThings[0])
// 2. Change the value of `"Hello"` to `"World"`.
randomThings[2] = "World";
//3. Check the value of the array to make sure it updated the array.
console.log(randomThings)
(4) [1, 10, "World", true]




//#16 ### We've Got Class
// Given the following array `
//const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]`

// 1. What would you write to access the 3rd element of the array?
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];
console.log(ourClass[2])
// 2. Change the value of "Github" to "Octocat"
ourClass[2] = "Octocat";
// 3. Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");
console.log(ourClass) 

2 Github
(5) ["Gizmo", "Zoom", "Octocat", "Slack", "Cloud City"]
undefined

// #17 ### Mix It Up
// 4. Given the following array `const myArray = [5 ,10 ,500, 20]`
const myArray = [5 ,10 ,500, 20];
// 1. using the `push` method, add the string `"Egon"` to the end of the array.
console.log(myArray)
myArray.push("Egon");
// 2. using a method, remove the string from the end of the array.
console.log( myArray.pop() );
console.log( myArray );
// 3. using the `unshift` method, 
//add the string `"Bob Marley"` to the beginning of the array
myArray.unshift( "Bob Marley" )
console.log( myArray)
// 4. using a different method, remove the string from the beginning of the array
console.log( myArray.shift() );
console.log( myArray );
// 5. use the reverse method on this array


//////////////////////////////////////////
const myArray = [5 ,10 ,500, 20];
// 1. using the `push` method, add the string `"Egon"` to the end of the array.
console.log(myArray)
myArray.push("Egon");

VM91:3 (4) [5, 10, 500, 20]
5
console.log(myArray)
VM93:1 (5) [5, 10, 500, 20, "Egon"]
undefined
console.log( myArray.pop() );
console.log( myArray );
VM95:1 Egon
VM95:2 (4) [5, 10, 500, 20]
undefined
myArray.unshift( "Bob Marley" );
console.log( myArray);
VM97:2 (5) ["Bob Marley", 5, 10, 500, 20]
undefined
console.log( myArray.shift() );
console.log( myArray );
VM99:1 Bob Marley
VM99:2 (4) [5, 10, 500, 20]
undefined


### Biggie Smalls
// Write an `if..else` statement:
// 1. console.log `little number` if the number is entered is less than **100**
// 2. If the number entered is 100 or more, alert `big number`.
const num = 0;
console.log(num){
  if (num < 100)
    console.log(`little number`){
    }else if(num > 100)
    alert(`big number`)
}
### Monkey in the Middle
// Write an `if...else if...else` statement:

// 1. console.log `little number` if the number entered is less than **5**.<br>

// 2.  If t
// 3. Otherwise, console.log "monkey". <br>
const n = (0) {
  if (a > 5) {
    return "little number";
  } else {
    return "monkey";
  }
}

console.log(n(8));
 




 //### What's in Your Closet?he number entered is more than 10, log `big number`.


// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

//```javascript
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
console.log(kristynsCloset)
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
console.log(thomsCloset)

// 1. What's Kristyn wearing today? Using bracket notation to access items in `kristynsCloset`,
// log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.
console.log("Kristyn is rocking that " + (kristynsCloset[2]) + " today!")
// 2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named `kristynShoe`.
console.log( kristynsCloset.shift() ); 
const kristynsShoe = [];

// 3. Kristyn just bought some sweet shades! Add `"raybans"` to her closet **after `"yellow knit hat"`.**
kristynsCloset.push("raybans");

// 4. Kristyn spilled coffee on her hat... modify this item to read `"stained knit hat"` instead of yellow.
kristynsCloset[4] = ["stained knit hat"];
kristynsCloset

// 5. Put together an outfit for Thom! Using **bracket notation**, access the first element in Thom's `shirts` array.
console.log(thomsCloset)
// 6. In the same way, access one item from Thom's pants array.


// 7. Access one item from Thom's accessories array.

// 8. Log a sentence about what Thom's wearing. Example: `"Thom is looking fierce in a grey button-up, jeans and wool scarf!"`

// 9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to `Footie Pajamas`.


// ## Functions


// ### printGreeting

// Write a function called `printGreeting` with a parameter `name` that returns a greeting 
const printGreeting = (name) => {
  console.log(printGreeting)
  for (var i = printGreeting.length - 1; i >= 0; i--) {
    printGreeting[i]
  }
}
console.log(printGreeting("Slimer"))
//with the argument **interpolated** into the greeting.
const printGreeting = (str1) => {
  console.log("Hello there " + str1 + '!')
// ```javascript
// console.log(printGreeting("Slimer"));
// ```
// > => Hello there, Slimer!
// <br>
// <hr>

// ### reverseWordOrder

// Write a function `reverseWordOrder` that accepts a single argument, a string.
// The function should return a string with the order of the words reversed. Don't worry about punctuation.

const reverseWordOrder = (str) => {
  const splitString = str.split(" ");
  const reverseArray = splitString.reverse();
  return joinArray = reverseArray.join(" ");

}
console.log(reverseWordOrder("Ishmael me call"));
// console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));
// console.log(reverseWordOrder("I use Lâncome on my comb"));
// > => "Call me Ishmael"
// > => "comb my on Lâncome use I"


// <br>
// <hr>

// ### calculate
// Write a function called `calculate`.
// This function should take three arguments, two numbers and a string.
// Name the parameters `num1`, `num2`, and `operation`.
// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.
// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.
// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).
// ```javascript
// console.log(calculate(4, 3, "sub"));
// => 1
// console.log(calculate(4, 3, "exp"));
// => 64
const calculate = (num1, num2, operation) => {
  if(operation === 'add') {
    return num1 + num2
  }
  else if(operation === 'sub') {
    return num1 - num2
   }
   else if(operation === 'multiply'){
    return num1 * num2
   }
   else if(operation === 'div'){
    return num1 / num2
   }
   else if(operation === 'exp'){
    return num1 ** num2
   } else {

   }

}
console.log(calculate(4, 3, "sub"));
1
console.log(calculate(4, 3, "exp"));
64
// # 1 
// Write a function `printCool` that accepts one parameter, `name` as an argument. 
//The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
// > => "Captain Reynolds is cool";
const printCool = (name) => {
  console.log(name + ' ' + "is cool")
}
printCool('Captain Reynolds');





// # 2
// Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// > => 125
const Volume = length * length * length;
    console.log(Volume)

// # 3
// Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, 
//false otherwise. The vowel could be upper or lower case.
// console.log(isAVowel("a"));
// > => true
const isAVowel = (str) => }
  if(str1 === vowel){
    return true
  } else {
    return false
}




// # 4
// Write a function `getTwoLengths` that accepts two parameters (strings). 
//The function should return an _array_ of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// > => [4, 13]
const getTwoLengths = (str1, str2) => {
  console.log(str1 + ' ' + str2)

}
getTwoLengths("Hank", "Hippopopalous");


// # 5 
// Write a function `getMultipleLengths` that accepts a single parameter as an argument:
// an **array** of **strings**. The function should return an array of **numbers** 
//where each number is the length of the corresponding string.
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))
// > => [5, 4, 2, 2, 4]
const getMultipleLengths = ["hello", "what", "is", "up", "dude"];
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))


// # 6
// Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. 
//If all numbers are the same, it doesn't matter which one is returned.
// If the two largest numbers are the same, one of them should be returned.
// console.log(maxOfThree(6, 9, 1));
// > => 9
const maxOfThree = (num1, num2, num3) =>{
  if(num1 < num2){
    return num2;
  } else if(num2 < num3){
    return num3 
  } else {
maxOfThree(1, 5, 8);

// # 7
// Write a function `printLongestWord` that accepts a single argument, an **array** of **strings**. 
//The method should return the longest word in the array. 
//In case of a tie, the method should return the word that appears first in the array.
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// > => "Peanutbutter"
const longestWord = (array) => {
console.log()
let newArray = []
for(let i = 0; i < array.length; i++)
  if(newArray[array[i].length] !== undefined)
   const longest_word = max(text.split(), key = length)
    return longest_word, length(longest_word)
}
// # 8

// Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
// power of 2` is 225.

// ```javascript
// console.log(transmogrify(5, 3, 2));
// ```

// > => 225
const transmogrifier = (num1, num2, num3) => {
    return (num1 * num2) ** num3
};

transmogrifier(5, 3, 2)     

// ### Objects

// ## Syntax

// List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.
const and the let statement declares a block scope
// Example:

// ```
// {} curly braces define the object.
// ```

// <br>
// <hr>

// ## Me

// 1. Create an empty object called `me`.
// 2. Assign it properties for **name**, **age**, and **email** with corresponding values.<br>
const me = [
  name: "Noemi",
  age: 31,
  email: 'nlll02@yahoo.com'
]
console.log(me);
// The object would look something like this if we console logged it:

// ```javascript
// console.log(me);
// ```

// > => {name: "Kristyn", age: 98, email: "kristyn@foo.bar"}


// 3. Using dot notation, access the **name** property in your object.<br>
// 4. Without writing directly into the object, update the value of **age** to be 1000 years old.<br>
// 5. Using dot notation, verify that **age** has been updated.<br>
// 6. Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
// 6. Access the value of "place of residence"<br>

// <br>
// <hr>

// ## Slimer

// ```javascript
// const monster = {
//    name: "Slimer",
//    color: "greenish",
//    type: "plasm or ghost or something"
// }
// ```

// * Given the **slimer** object:
//     - What would you write to access the `name` and console.log it?
//     - What would you write to change the `type` to 'creature' (without changing it inside the object)
//     - What would you write to add a key to the object called `age`, and set the age to 6?
//     - console.log the object to make sure `type` is creature, and `age` is 6

// <br>
// <hr>

// ## Ogres

// Let's say you want to make an adventure game where you are an adventurer and you are going to fight **ogres**.

// Using **objects**, create **models** and have them interact.

// * how would you model your `adventurer`? Your adventurer will want a **name** and **hitpoints**. What else would your adventurer need?
// * how would you model an `ogre`? Your ogre will want **hitpoints**.

// * Write a very small program that will simulate a battle between your adventurer and an ogre. You can use the same techniques you used in your **landscaping** game from the weekend.
//   * When your adventurer's hitpoints reach 0 the game is over.
//   * When your ogre's hitpoints reach 0 the game is over.

// * If you want to provide input to the game, you can run it in the Chrome console (but that isn't strictly necessary for now).

// <br>
// <hr>

// # EXTRA STUFF

// ## Cat Combinator

// ### 1. Mama cat
// * Define an object called `cat1` that contains the following properties:
//   * name
//   * breed
//   * age (a number)

// * console.log the cat's age
// * console.log the cat's breed


// ### 2. Papa cat
// * Define an object called `cat2` that also contains the properties:
//   * name
//   * breed
//   * age (a number)


// ### 3. Combine Cats!

// The cats are multiplying!

// Write a function `combineCats` that has two parameters `mama`, and `papa`. 
//The function will take two arguments -- each a cat object.
const combineCats = (cat1, cat2) => {
  console.log(combineCats(cat1, cat2));
}
// * Pass `cat1` and `cat2` as arguments to the `combineCats` function. The function should console.log them.

// Example:

// ```javascript
// combineCats(cat1, cat2)
// ```

// > { name: "Joe", age: 19, breed: "Mog" }

// > { name: "Jam", age: 45, breed: "Siamese" }


// **This is to demonstrate that functions can take objects as arguments**

// You could also invoke the `combineCats` function by writing the objects straight into the parentheses:

// ```javascript
// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
// ```
// <br>

// * Make it so the `combineCats` function will return a combination of the two incoming cats
//   * The result should be an object wherein the
//     * name is a concatenation of the parents' names
//     * the age is 1
//     * the breed is each of the parents' breeds with a hyphen in between

// Example:

// ```javascript
// console.log(combineCats(cat1, cat2));
// ```

// Result:

// ![](https://i.imgur.com/CEB2ire.png)

// **This is to demonstrate that a function can return an object**

// <br>
// <hr>

// ## 4. Cat brain bender

// If `catCombinator` returns an **object**, and if `catCombinator` takes **objects** as **arguments**, then it stands to reason that:

// `catCombinator` can use **itself** as its own argument.

// Take a second to stew on that . . .

// What is the result of:

// ```javascript
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// ```

// Whoa . . .

// The above console.log is **two levels** deep of combineCats.

// * Write a console.log that is **three levels** deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.

// Your output should look something like:

// ![](https://i.imgur.com/zuTzm5X.png)

// <br>
// <hr>
































