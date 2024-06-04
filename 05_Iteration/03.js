// for of 

// const myArray = [1,2,3,4,5]

// for (const num of myArray) {
    
// }


// Maps

const map = new Map()
map.set("IN","India")
map.set("USA","United Sate of America")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':-', value);
}

const myObj = {
    'game1' : 'superman',
    'game2' : 'spiderman'
}//Not iterable

// for (const [key,value] of myObj) {
//     console.log(key,':-', value);
// }


const lang = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby'
}
for (const key in lang) {
    // console.log(`${key} shortcut is for ${lang[key]}`)
}

// for (const key in map) {
//   console.log(key);
// }

const coding = ["js","ruby", "cpp","rust","java"]   

// coding.forEach( function (item) {
//     console.log(item);
// } )


// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr ) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "pythom",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )