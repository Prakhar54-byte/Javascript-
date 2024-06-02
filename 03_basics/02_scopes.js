let a = 325
if (true) {
    let a = 10
    const b = 20
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){// Like parent and child child can access parents varibles but Parents cannot access 
    const username = "Prakhar"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()
if(true){
    const user = "Prakhar"
    if (user === "Prakhar") {
        const website = " youtube"
        console.log(user + website);
    }
    // console.log((website));
}

// console.log((user));



// +++++++++++ Intersting ++++++++
function addone(num) {
    return num + 1
}

console.log(addone(6))

const addtwo = function(num) {
    return num + 2
}

console.log(addtwo(3))