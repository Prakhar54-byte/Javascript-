function setUsername(username) {
    //complex DB calls
    this.username = username
    console.log('called');
}

function createUser(username, email, password) {
    this.email = email
    this.password = password
    setUsername.call(this, username)
}

const chai = new createUser("chai", "chai@gb.com", "1234")
console.log(chai);