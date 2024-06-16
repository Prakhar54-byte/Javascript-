// ES6

// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.password = password
//         this.email = email
//     }

//     encrytPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai  = new User('chai','abc@kj.com','1464')

// console.log(chai.encrytPassword());
// console.log(chai.changeUsername());

// Behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());