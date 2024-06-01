const inst_user = new Object()

inst_user.id = "15465fdsg"
inst_user.name = "Karan"
inst_user.isLoggedin = true

const regular_user = {
    email: "jkguikad.com",
    full_name: {
        userfullname: {
            firstname: "Prakhar",
            fathername: "Rashmikant",
            surname: "Chauhan"
        }
    }
}

//  console.log(regular_user.full_name.userfullname.fathername);

const obj1 = { 3: "s", 4: "g" }
const obj2 = { 6: "h", 5: "r" }

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)//transfer all object into first object
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3==obj1);//true

const obj3={...obj1,...obj2}// use this
// console.log(obj3);

const user = [
    {
        1:"a",
        id:"jhd"
    },
    {
        1:"a",
        id:"jhd"
    },
    {
        1:"a",
        id:"jhd"
    },
    {
        1:"a",
        id:"jhd"
    },
    {
        1:"a",
        id:"jhd"
    },
    {
        1:"a",
        id:"jhd"
    }
]
user[2].id


// console.log(inst_user);

// console.log(Object.keys(inst_user));
// console.log(Object.values(inst_user));
// console.log(Object.entries(inst_user));

// console.log(inst_user.hasOwnProperty("name"));



const course = {
    courname:"js in hindi",
    price:5656,
    coureInstructor:"Prakhar"
}

const {coureInstructor: instructor} = course

// console.log(coureInstructor);
console.log(instructor);


