alert("its working! Yay!")
//arrays review
/*
An array is a way to save multiple values in a single variable location
Arrays use indexing all the time to reference an individual item.

Example Viedo 
var myGrades = [ 85, 92, 97, 89, 91 ];
console.log(myGrades);
//myGrades.push(85)
//console.log(myGrades);
//myGrades.pop();
//myGrades.pop();
//console.log(myGrades);

console.log(myGrades[0]);
myGrades[0] = 90;
console.log(myGrades);
*/

//ARRAY LITERAL - is a comma separated list of array elements within brackets, it can contain other types of arrays within.
//PREFERRED WAY to make arrays **
/*let menu = [
    "Hamburger",
    "Fries",
    "Milkshake",
    "Garden Salad",
    "Pizza Slice",
];
*/
let base = 1024;
let table = [base, base + 1, base + 2, base + 10];
console.log(table);

let b = [[1, { x: 1, y: 2 }], [2, { x: 3, y: 4 }]];
console.log(b);

//ARRAY() CONSTRUCTOR - will use new keywords *Array()*
/*
you can invoke constructor in three ways:
1. call it with no arguments - it creates an empty array with no elements and is equivalent to array literal
[].
    let a = new array();

2. call it with a single numeric argument, which specifies a length:
    let c = new Array(10);
    console.log(c);
    it creates an array with the length. It preallocates the array when yoou know in advance how many elements 
    will be require. However, no values will be stored and index isnt defined for the array. 

3. Explicitly specify two or more array elements or a single non-numeric elementfor the array

    let h = new Array(5, 4, 3, 2, 1, "testing, testing");
    console.log(h);
    the constructor arguments become elements of the new array. in which is better to just use array literal.
*/
let menu = new Array(
    "Hamburger", "Fries", "Milkshake", "Garden Salad", "Pizza Slice"
);
console.log(menu);

/*
THINGS TO REMEBER ABOUT ARRAYS:
- an array can hold any type of primitive data(string, number, boolean, etc..)
- an array can also hold other arrays or objects
- an array can be empty
- an array can hold one or more elements
*/
let honey = [];
console.log(honey);

let garbage = ["skunk"];
console.log(garbage);

//INDEXING ARRAYS
/*
Array Important Features:
1. An array is an ordered collection of values.
2. Each value is called an element of the array.
3. The numeric position of the value is reffered to as the index of the array.

- All arrays are 0 indexed which means they start at 0 index
*/

let menu2 = [
    "Hamburger",
    "Fries",
    "Milkshake",
    "Garden Salad",
    "Pizza Slice",
];
console.log(menu2);

//Accessing items in an array
menu2[1];
console.log(menu2[1]);

//Adding items to an array
menu2[5] = "Steak";
console.log(menu2);

//ARRAY METHODS
/*
Method	Description
push() - Adds a new element to the end of an array and returns the new array length
pop() - removes the last element of an array and returns the value that was removed
forEach() - Calls a function once for each element in an array, in order
reverse() - Reverses the order of the elements in the array
join() - Converts the elements in the array to a string with a default comma (,) between each one
find() - Returns the value of the first element in the array that passes the test provided (as a function)
length - A property that sets or returns the number of elements in an array
*/

//push() - Adds a new element to the end of an array and returns the new array length
var pets = ["goldfish", "dog", "cat", "parrot"];
pets.push("gerbil");
console.log(pets);

var pushLength = pets.push("lizard");
console.log("New Length: " + pushLength);

//pop() - removes the last element of an array and returns the value that was removed
var bugs = ["grasshopper", "ant", "ladybug", "beetle"];
console.log(bugs);
bugs.pop()
console.log(bugs);

//forEach() - Calls a function once for each element in an array, in order
var sum = 0;
var numbers =[65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item){
    sum += item;
    console.log(sum);
}