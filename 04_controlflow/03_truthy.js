const userEmail = []

// if (userEmail) {
//     console.log("Got an user Email");
// } else {
//     console.log("Dont have user Email");
// }


// Falsy valuse

// false,0 , -0, BigInt 0n,"", null. undefined, NaN

// Truthy values
// "0", "false", ' '," ", [],{},function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null undefined


let val1
// val1 = 5 ?? 10//5
// val1 = null ?? 10//10
// val1 = undefined ?? 15//15
// val1 = null ?? 10 ?? 15//10
// console.log(val1);


// Terniary Operator

// condition ? true : false
const Price = 100
Price>= 100 ? console.log("More than 100") : console.log("Less than 100");