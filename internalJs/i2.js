//callback hell

//we want to do some other tasks when first one is completed so we can pass callback
//functions but there may be agian callbacks and hence our code grows horizontally which
//is called callback hell or pyramid of doom
//and we are depending on other api to call our callback function which is inversion
//of control.

function fun1(a1,b1){}
function fun2(a2){}
function fun3(a3){}
function fun4(a4){}

fun1(cart,function(){
    fun2(function(){
        fun3(function(){
            fun4(function(){

            })
        })
    })
})






//Promises
var cart = ["a", "b", "c"];

//chaining, consuming
const promise = createOrder(cart);
promise.then(function (orderId) {
    console.log(orderId);
    return orderId;
}).then(function(orderId){
    return proceedPayment(orderId);
})
.then(function(payInfo){
    console.log(payInfo);
})
.catch(function(err){               //catch will handle any error inside this promise chain
    console.log(err.message);
})
.then(function(){
    console.log("Catch will catch error from upper chain only not from below, so this will be called.");
})
console.log(promise);
//producing

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validate(cart)) {
            const err = new Error("cart not valid!");
            reject(err);
        }

        const orderId = "123";
        setTimeout(function (params) {
            resolve(orderId);
        }, 5000);
    });
    return pr;
}
function proceedPayment(){
    return new Promise(function(resolve,reject){
        resolve("Payment successful!");
    });
}
function validate(cart) {
    return true;
}
