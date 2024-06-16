class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static creatId() {
        return '123'
    }

}

const prakhar = new User('prakhar')
// console.log(prakhar.creatId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const chai = new Teacher('chai','pra@kj.com')
console.log(chia.creatId());