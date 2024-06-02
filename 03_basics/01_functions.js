function saymyNameMarth() {
    console.log("P");
    console.log("r");
    console.log("a");
    console.log("k");
    console.log("h");
    console.log("a");
    console.log("r");
}

// saymyNameMarth()

function addTwoNUm(number1, number2) {//parameters
    console.log(number1 + number2);
}
function addTwoNUm(number1, number2) {//parameters
    //    let result = number1 + number2;
    //    return result
    return number1 + number2
}

const result = addTwoNUm(3, null)//arguments

// console.log("Results : ", result);


function loginUser(username) {
    if (username === undefined) {//(!username)
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUser("Prakhar"))
// console.log(loginUser());

function calculatedcartPrice(...num1){//rest Operator
    return num1
}

console.log(calculatedcartPrice(200 ,400 ,600));

const user = {
    username:"Prakhar",
    price: 669
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"Karan",
    price:358
})

const myArray = [35,66,22,33]

function returnSecond(getArray) {
    return getArray[1]
}
console.log(returnSecond(myArray)); 