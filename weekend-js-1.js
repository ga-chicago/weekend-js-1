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


let sum = 0;
for (i = 1; i < 1000; i++){
	if(i % 3 === 0 || i % 5 === 0){
		console.log(sum += i)
	}
}


















