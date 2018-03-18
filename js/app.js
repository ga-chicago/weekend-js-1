





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
console.log("Hello my name is" + ' ' + 'Noemi');
//so that it returns a new string with them concatenated. 
//>ex: `Hello, my name is Jean Valjean`
///////////////////////////
let yourName = ("Noemi") 
 console.log(yourName);
Noemi
undefined
console.log("Hello my name is" + ' ' + 'Noemi');
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















const range = [1-10];
console.log(range);
for (i = 0; i < 10; i++) {
  range = range + i;
}

const range = [1-10];
console.log(range);
for (i = 0; i < 10; i++) {
  range = range + i;
}
[-9]





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

var line = [];
//you are uninterested in odd numbers, so increment the counter by 2
for(var i = 0; i <= 4000; i = i + 2) {
    line.push(i);
    if((i + 2) % 5 === 0) { //every 5 lines print result
        console.log(line);
        line = []
    }
}










//#11 ## Give me Five
// 1) For the numbers 0 - 100, print out "I found a `number`. 
//High five!" if the number is a multiple of five.

// >Example Output:
// ```
// I found a 5. High five!
// I found a 10. High five!
const N = [100] => {
 for (i % 2; i = 0){
  console.log(i + "I found a `number`. High five!");
}  



// ```














// 2) Add to the code from above to print out 
//"I found a `number`. Three is a crowd" if the number is a multiple of three.

// >Example Output:
// ```
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
```
// ```













// //#12 ## Savings account
// 1) Write code that will save the sum of all the numbers 
//between 1 - 10 to a variable called `bank_account`.
// >Check your work! Your banck_account should have $55 in it.
// 2) You got a bonus! Your pay is now doubled each week. 
//Write code that will save the sum of all the numbers 
//between 1 - 100 multiplied by 2.
// >Check your work! Your banck_account should have $10,100 in it.















//////#13 ## Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
// :clap: You just solved [Project Euler](https://projecteuler.net/problem=1) 
//problem 1! :clap:













///////#14 ### Easy Does It
// 1. Create an array that contains three quotes 
//and store it in a variable called `quotes`.











// #15 ### Random
// Given the following array `const randomThings = [1, 10, "Hello", true]`

// 1. how do you access the 1st element in the array?

// 2. Change the value of `"Hello"` to `"World"`.

//3. Check the value of the array to make sure it updated the array.














//#16 ### We've Got Class
// Given the following array `
//const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]`

// 1. What would you write to access the 3rd element of the array?

// 2. Change the value of "Github" to "Octocat"

// 3. Add a new element, "Cloud City" to the array.


















// #17 ### Mix It Up
// 4. Given the following array `const myArray = [5 ,10 ,500, 20]`
// 1. using the `push` method, add the string `"Egon"` to the end of the array.
// 2. using a method, remove the string from the end of the array.
// 3. using the `unshift` method, 
//add the string `"Bob Marley"` to the beginning of the array
// 4. using a different method, remove the string from the beginning of the array
// 5. use the reverse method on this array














