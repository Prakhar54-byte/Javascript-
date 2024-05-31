let myDates=new Date()
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toISOString);
// console.log(myDates.toJSON());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.toLocaleString());
// console.log(myDates.toLocaleTimeString());
// console.log(myDates.toTimeString());
// console.log(myDates.toUTCString());
// console.log(myDates.getTimezoneOffset());

// let myCreatedDate = new Date(2023,0,26)
// let myCreatedDate = new Date(2023,0,26,5,3)
let myCreatedDate = new Date("2024-06-26")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log( myTimeStamp);
// myTimeStamp=Date(myTimeStamp)
// console.log(typeof myDates);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//cha ne into sec



let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate());

newDate.toLocaleDateString('default',{
    weekday:"long",
})