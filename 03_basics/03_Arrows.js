const user = {
    username: "Prakhar",
    price: 567,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website `);
        console.log(this);//give current context of object
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);//{}//In brower it give window object


// function chai(){
//     console.log(this)
// }

// chai()


// const chai = function(){
//     let username = "Prakhar"
//     console.log(this.username);
// }
const chai = () => {
    let username = "Prakhar"
    console.log(this.username);
}

// chai()

// const addnum = (num1 , num2) => {
//     return num1 + num2
// }


// const addnum = (num1 , num2) =>  num1 + num2// cannot return object in this form


const addnum = (num1, num2) => (num1 + num2)




console.log(addnum(65, 62));


const myArray = [3,5,6,94,4]

