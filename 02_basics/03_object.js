// Singleton--->by constructor
//Object.create


// object literals

const mySym=Symbol("key1")
const JSuser={
    name:"Prakhar",
    age:18,
    "full name":"Prakhar Chauhan",
    [mySym]:"key2",
    location:"Surat",
    Email:"prakhar.com",
    isLoggIn:false,
}

// console.log(JSuser.Email);
// console.log(JSuser["Email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mySym]);
// console.log(JSuser"full name");//gives error
// Object.freeze(JSuser)
JSuser.Email="myemail.com"
// console.log(JSuser);

JSuser.greeting=function(){
    console.log("Hello World");
}
JSuser.greetingTwo=function(){
    console.log(`Hello World ${this.name}`);
}
console.log(JSuser.greeting());
// console.log(JSuser.greeting);//FUnction is not returned its type is returned
console.log(JSuser.greetingTwo());
