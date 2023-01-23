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
console.log("c %d", c);

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
        console.log ("Hello from method , prop1 is " + this.prop1 );
    }
}
console.log(obj1.prop1)
obj1.method1();

//event handler
function change(){
    document.getElementById("demo").innerHTML = "Content Changed";
}

/*working with strings */

let s1 = "abcd";
s1 +=  "ef";
console.log("Len : "+s1.length);
let sx = "John";
let sy = new String("John");    //string as object
console.log("Typeof sx : "+typeof sx);
console.log("Typeof sy : "+typeof sy);
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
console.log( textl.toUpperCase() );

//spliting
let textsp = "a,b,c,d";
const myArray = textsp.split(",");
console.log(myArray);

//searching 
let texts = "The rain in SPAIN stays mainly in the plain";
console.log( texts.match(/ain/gi) );
let textsw = "Hello world, welcome to the universe.";
console.log( textsw.startsWith("world" ,6));

//string interpolation
let a1 = 3;
let a2 = 2;
console.log( `Total: ${(a1 * (1 + a2)) }` );


//Working with Numbers
//NaN
let num = 33;
let xn = 100 / "Apple";
console.log(xn);
console.log(xn + 2);
console.log(isNaN(xn));
console.log(typeof NaN);
console.log(-2/0);
console.log(new Number(2) + 5);
console.log(num.toString(2)); //binary

//Bigint
let x1 = 999999999999999999;
console.log(Number.isSafeInteger(x1));
let x2 = 1234567890123456789012345n;
console.log(x1 + 2);
console.log(x2);
console.log(Number.MAX_SAFE_INTEGER)