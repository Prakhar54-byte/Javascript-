const user = {
    username: "Prakhar",
    logInCount: 5,
    signature: true,

    getUserData: function () {
        console.log(`Username: ${this.username}`);
    }
}

// console.log(user["username"]);
// console.log(user["getUserData"]());


// const promiseOne = new Promise()


function User(username, logInCount, isLoggIn) {
    this.username = username;
    this.isLoggIn = isLoggIn;
    this.logInCount = logInCount;

    return this
}


const userOne = new User("Prakhar", 3, false)
const userTwo = new User("Chai", 6, true)
console.log(userOne.constructor);
console.log(userTwo);
console.log(user.constructor);

// new is Constructor 
// Thing happens by new keyword
// 1----> Empty object is created called as instances
// 2----> Constructor function is called by new 
// 3----> this keyword is injected
// 4----> give the result