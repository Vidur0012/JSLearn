//printing on console
console.log("hi");

//printing in html content
document.getElementById("demo").innerHTML = "I am p tag.";

//window alert
// window.alert("this is alert");

// document write method
document.write(20);



//variables and operators
{
    let a = 5; //block scope
    console.log("a " + a);
}
var b = 3; //global scope
b *= 5; // assignment operator
b--;
const c = 5; //constants (block scope)
console.log(`b ${b}`);
console.log("console.log( ); %d", c);

//typeof operator
console.log(typeof b);


//undefined
let un;
console.log(un);

//sample function
function myFunction(a, b) {
    return a * b;
}

console.log(myFunction);
console.log(myFunction(2, 5));

//sample object
let obj1 = {
    prop1: "value1",
    prop2: "value2",
    method1: function () {
        console.log("Hello from method , prop1 is " + this.prop1);
    }
}
console.log(obj1.prop1)
obj1.method1();

//event handler
function change() {
    document.getElementById("demo").innerHTML = "Content Changed";
}

/*working with strings */

let s1 = "abcd";
s1 += "ef";
console.log("Len : " + s1.length);
let sx = "John";
let sy = new String("John");    //string as object
console.log("Typeof sx : " + typeof sx);
console.log("Typeof sy : " + typeof sy);
console.log(sx === sy);

//slicing
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);
console.log(part);

//replacing
let textr = "Hello  World!";
console.log(textr.replace("World", "Abc"));

//case conversion
let textl = "Hello World!";
console.log(textl.toUpperCase());

//spliting
let textsp = "a,b,console.log( );,d";
const myArray = textsp.split(",");
console.log(myArray);

//searching 
let texts = "The rain in SPAIN stays mainly in the plain";
console.log(texts.match(/ain/gi));
let textsw = "Hello world, welcome to the universe.";
console.log(textsw.startsWith("world", 6));

//string interpolation
let a1 = 3;
let a2 = 2;
console.log(`Total: ${(a1 * (1 + a2))}`);


//Working with Numbers
//NaN
console.log("\nNumbers-----");
let num = 33;
let xn = 100 / "Apple";
console.log(xn);
console.log(xn + 2);
console.log(isNaN(xn));
console.log(typeof NaN);
console.log(-2 / 0);
console.log(new Number(2) + 5);
console.log(num.toString(2)); //binary
console.log((9.556).toExponential(2));
console.log((9.556).toFixed(2));
console.log(Number("10"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));
console.log(Number.EPSILON);


//Bigint
console.log("\nBigint-----");

let x1 = 999999999999999999;
console.log(Number.isSafeInteger(x1));
let x2 = 1234567890123456789012345n;
console.log(x1 + 2);
console.log(x2);
console.log(Number.MAX_SAFE_INTEGER);


//Arrays
console.log("\nArrays------------");
const arr1 = [1, "str", { abc: 2 }];
console.log(arr1);
const arr2 = [3, 5, 6, 1, 22, 8, 0];
console.log(arr2.length);
arr2.sort(function (a, b) { return a - b; });
console.log(arr2);
//summing array elements
let sum = 0
arr2.forEach(element => {
    sum += element;
});
console.log(sum);
console.log(Array.isArray(arr2));
arr2.pop();
arr2.push(9);
console.log(arr2.join("-"));
console.log(arr1.concat(arr2));
arr2.splice(1, 1, 11, 12);
console.log(arr2);
console.log(arr2.slice(2, 6));
console.log(arr2.toString());
console.log(Math.max.apply(null, arr2));
const arr3 = arr2.map(function (ele, index) { return 2 * ele; });   //map method
console.log(arr3);
//reducer
let total = arr2.reduce(function (total, ele) { return total + ele; }, 3);
console.log(total);
console.log(arr2.indexOf(12));
console.log(arr2.find((ele) => ele > 10));
console.log(arr2.includes(12));

//Dates
console.log("Dates-----------");
const dt = new Date("Jan 24 2023");
console.log(dt);
console.log(Date.parse("Jan 24 2023"));
console.log(dt.getDay());
console.log(Date.now());
dt.setMonth(2);
console.log(dt);


//Math
console.log("\nMath------------------");

console.log(Math.PI);
console.log(Math.round(2.67));
console.log(Math.ceil(2.4));
console.log(Math.floor(3.6));
console.log(Math.pow(3, 4));
console.log(Math.sqrt(36));
console.log(Math.sin(Math.PI / 2));
console.log(Math.random());


//conditional statements
const A = 3;
if (A == 1) {
    console.log("A is 1");
}
else if (A == 2) {
    console.log("A is 2");
}
else {
    console.log("A is other than 1 or 2");
}

switch (A) {
    case 1:
        txt = "A is 1";
        break;
    case 2:
        txt = "A is 2";
        break;
    default:
        txt = "Default match";
}
console.log(txt);

//loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

const ar = ["A", "B", "C"];
for (let x of ar) {
    console.log(x);
}

let cnt = 1;
while (cnt < 10) {
    cnt++;
}
console.log(cnt);

label1:
for (let x = 0; x < 3; x++) {
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue label1; }
        console.log("Number is " + i);
    }
}

//sets
const set1 = new Set();
set1.add("a");
set1.add("a");
set1.add("b");
set1.add("c");
console.log(set1);

//maps
const mp1 = new Map();
mp1.set("a", 2);
mp1.set("b", 3);
mp1.set("c", 1);
console.log(mp1);
for (let x of mp1) {
    console.log(x[0]);
}

//type conversion
let y = "John";   // y is a string
let x = + y;
console.log(typeof x);
console.log("abc".constructor);
console.log(void (2 == 2));

//Bitwise operation
console.log((-5 >>> 0).toString(2));
let t = (-5 >> 1);
console.log(t);
console.log(t.toString(2).length);


//Regular expression
console.log(/e/.test("Hello world"));
console.log(/e/.exec("Hello world"));

//Error handling
// xyz = 2;
try {
    console.log(xyz);
}
catch (err) {
    console.log("Got an error : " + err.message);
}
finally {
    console.log("finally block executed");
}


//scope
function abc() {
    fn = 99;   //global scope
}
abc();
console.log(fn);

function test() {
    var foo = 33;
    if (foo) {
        // let foo = foo + 55; // ReferenceError
    }
}
test();


function abcd() {
    //strict mode 

    "use strict";
    // abcde =4; //not allowed
}
abcd();

//this keyword
console.log(this.toString());

function fn2() {
    "use strict";
    return this;
}
console.log(fn2());

const p1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const p2 = {
    firstName: "Abc",
    lastName: "Xyz",
}

// Return "John Doe":
console.log(p1.fullName.call(p2));

//Arrow function
arrfn = (nm) => "Hello " + nm;
console.log(arrfn("Person1"));

//Classes
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
let car = new Car("Ford", 2019);
console.log(car.age(Date().getFullYear));

// modules
// import person3 from "./p2.js";
// console.log(person3());

//JSON
let jsontxt = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let jsonobj = JSON.parse(jsontxt);
console.log(jsonobj);

//DOM
const ele = document.getElementById("demo");
ele.innerHTML = "Date : " + Date();
ele.className = "class2";
ele.style.color = "orange";

document.write("dsfdsf");

function function1() {
    console.log(this);
    this.innerHTML = "New Button";
}
document.getElementById("btn1").onclick = function1;

document.getElementById("id02").innerHTML =
    document.getElementById("id01").nodeName;

function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
myObj.firstName;  

function a(){
    var x=0,z=10;
    return function(){
        console.log(x);
    }
}
a()();

ttt = 6;
