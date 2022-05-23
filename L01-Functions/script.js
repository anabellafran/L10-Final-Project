//Functions and Variables

/*
OVERVIEW
function functionName(parameter_values) {
    //code to be executed
}
We first define a function using the function keyword. We then give the function a functionName. Choose a name 
that is concise and obviously describes what the function will do.

After the name, you'll see parentheses ( ) that contain the function's parameters, if there are any. If a 
function does not have parameters, you will still include parentheses but should leave them empty.

Finally, you'll see the curly brackets { } that contain the code to be executed when the function is called. 
This is called the "body" of the function and defines what the function does.
*/

/*
//EXAMPLES
function greeting(name, dayOfWeek){
    console.log(`Hello ${name} !`);
    
    if (dayOfWeek){
        
console.log(`Today is ${dayOfWeek}.`);
    }
}


greeting("Kadria", "Friday");
// this is what you do to call or invoke a function. 
//parameter is the same as a variable


function calculateSalesTaxes(price){
    var taxRate = 0.0625;
    var salesTax = price * taxRate;

    return salesTax;
    //each function can only have one return value. call return at the very end of function. 

}

var tax = calculateSalesTaxes(250);
console.log(`Sales tax for $250 is $${tax}`);
console.log(calculateSalesTaxes(250));
*/

/*
uSER-DEFINED FUNCTIONS
JavaScript allows you to define functions to meet your needs. 
- if a function does not have any parameters  no arguments will pass inside the parentheses when its called 
- Parameters are variables whose values are defined when the function is called

*/
//Example 1: Printing a console.log function on console
function sayHello() {
    console.log("Hello!!");
}

sayHello();

//Example 2: adding Functions to print on console. 
function add(a, b) {
    return a + b;
}
let result = add(2, 3);
console.log(result);

//CALLING FUNCTIONS in HTML 
/*
- You will learn how to call functions in HTML as you did in JS
*/
function sayJello(){
    console.log("JELLO!!");
}

//Variables and Scope 
/*
Scope in JavaScript refers to the locations where a variable can be accessed within a program.
There are two types of scope for variables in JavaScript:
-Local Scope
-Global Scope
*/

//Local Scope 

function sayHowdy(){
    let myName= "bob";
    //Local variable, myName, can only be used in this function 
    console.log ("Howdy, " + myName)
}

sayHowdy();

function printMyName(){
    //myName cannot be used here 
    console.log(myName);
}

//Global Scope
//variable declared in global scope 
let yourName= "Bob";

function sayHi(){
    console.log("Hi, " + yourName)
}

sayHi();

function sayBye(){
    console.log("Bye, " + yourName)
}

sayBye();

//BUILT-IN FUNCTIONS IN JS
/*
toString( )- Returns a string representation of a variable's value.
length - Returns the length of the string.
indexOf( ) - Returns the index within the String of the first occurrence of the specified value.
toUpperCase( ) - Returns the string value converted to uppercase.
toLowerCase( ) - Returns the string value converted to lowercase.
split( ) -	Splits a string into an array of strings by separating the string into substrings.
parseInt( ) - Parses (analyzes or reads) a string and returns an integer.

*/

//toString() - Returns a string representation of a variable's value.

function numToString(num) {
    var str = num.toString();
    //str is now a string data type
    console.log(str);
}

let myNum = 25; //number data type 
numToString(myNum);

//length - Returns the length of the string. counts the characters inside the string everything

function strLength(myString){
    var num = myString.length;
    console.log(num);
}

var bday = "Happy Birthday!";
strLength(bday);

//indexOf() - Returns the index within the String of the first occurrence of the specified value.

function findFavorite(myString){
    var num = myString.indexOf("favorite");
    console.log (num);
}

var pizzaStr = "Pizza is my favorite food";
findFavorite(pizzaStr);

//toUpperCase() - Returns the string value converted to uppercase.

function upperCase(myString){
    var upperString = myString.toUpperCase();
    console.log(upperString);
}

var sentence = "It is a wonderful day!";
upperCase(sentence);

//toLowerCase() - This method converts a string to lower case letters.

function lowerCase(myString){
    var lowerString = myString.toLowerCase();
    console.log(lowerString);
}

var sentence2 = "It is a WONDERFUL day!";
lowerCase(sentence2);

//split() - This method splits a string into an array of strings, breaking each of the smaller strings up based on the argument you pass in.

function splitSpaces(str){
    var reslt = str.split(" ");
    console.log(reslt);
}

var myStr = "How are you doing today?"
splitSpaces(myStr);

//parseInt()
/*
This is a useful function that can be used to convert a string to a number. 
It will parse the numbers present within a string and return the number as an integer value.
*/

var a = "10";
var b = "20";
//parseInt change here value into a number 
var c = parseInt(a) + parseInt(b);
console.log(c);

