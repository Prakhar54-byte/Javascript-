// array

const myArr=[0, 54, 6, 5 ,3] 

const myNewArr=new Array(3,6,9)


//Array methods

// myArr.push(66)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(69)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(33));//boolean
// console.log(myArr.indexOf(54));

const newArr=myArr.join()//converts to strings


// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ",myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);
