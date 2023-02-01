/*
    Internal working of js 
*/

// Call back

setTimeout(function(){
    console.log("hello");
}, 5000);

function x(y){
    console.log("x");
    y();
}
x(function (){
    console.log("y");
});

document.getElementById("b1").addEventListener("click",function xyz(){
    console.log("Clicked");
});

//main thread is finished first

setTimeout(function(){
    console.log("hello from set-timeout");
},0);

console.log("hello from main thread");

//set-timeout can take more time bcz it's executed after main thread
setTimeout(function(){
    console.log("hello from set-timeout 2 sec");
},2000);


// ? 
// let startDate =  new Date().getTime();
// let  endDate= new Date().getTime();
// while(endDate  < startDate + 6000){
//     endDate  = new Date().getTime();
// }
// console.log("While ended");

//finding max using reducer

const arr = [1,4,2,7,9];
const output = arr.reduce(function(max,cur){
    if(cur > max)
        max = cur;
    return max;
},arr[0]);

console.log(output);