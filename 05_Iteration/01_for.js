for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5)        {
        //console.log("5 is best number");
        
    }
    // console.log(element);
    
}
// console.log(element);

for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
       // console.log(i + '*' + j + ' = '+ i*j);
    }
    
}


//break and continue 

for (let index = 0; index <= 20; index++) {
    if(index==5){
        console.log("Detected 5");
        continue
    }
   console.log(`Value of i is ${index}`);
    
}