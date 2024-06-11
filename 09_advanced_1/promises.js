// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promises1 = new Promise(function (resolve, rejected) {
    //Do 
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promises1.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, rejected) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 resolved');
})


const promises3 = new Promise(function (resolve, rejected) {
    setTimeout(() => {
        resolve({ username: "Prakhar", email: 'prakhar@com' })
    }, 1000);
})

promises3.then(function (user) {
    console.log(user);
})

const promises4 = new Promise(function (resolve, rejected) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: 'Hitesh', password: "596" })
        } else {
            rejected('ERROR: Something wnet wrong')
        }
    }, 1000);
})

promises4
    .then((user) => {
        console.log(user);
        console.log("one");
        return user.username
    })
    .then((username) => {
        console.log(username);
        console.log("two");
    })
    .catch((error) => {
        console.log(error);
        console.log("three");
    })
    .finally(() => { console.log("The promise is resolved or rejected") })


const promises5 = new Promise(function (resolve, rejected) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'Hitesh', password: "596" })
        } else {
            rejected('ERROR: JS wnet wrong')
        }
    }, 1000);
})

async function consumePromise() {
    try {
        const respone = await promises5
        console.log(respone);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromise()

// async function getAllUser (){
//    try{
//     const respone = await fetch('https://api.github.com/users/Prakhar54-byte')
//     // console.log(respone);
//     const data = await respone.json()
//     console.log(data);
//    }catch(error){
//     console.log("E:",error);
//    }
// }
// getAllUser()


fetch('https://api.github.com/users/Prakhar54-byte').then(
    (respone) => {
        return respone.json()
    }
).then((data) => {
    console.log(data);
})
    .catch((error)=> {
    console.log(error);
})