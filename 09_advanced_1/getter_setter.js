class User {
  constructor(username, email, password) {
    this.email = email;
    this.password = password;
    this.username = username;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}

const prakhar = new User("prakhar", "poj@apple.com", "abc");
console.log(prakhar.email);
