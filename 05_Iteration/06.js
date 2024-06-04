const myNums = [1,2,3,4]

// const newNums = myNums.reduce(function (acc,cumm) {
//     console.log(`acc : ${acc} curent val : ${cumm}`);
//     return acc + cumm
// }, 0 )

const myTotal = myNums.reduce( (acc , cumm ) => acc + cumm , 0)

// console.log(myTotal);


const cousrePrice = [
    {
        itemName : 'java',
        price : 999
    },
    {
        itemName : 'javascript',
        price : 699
    },
    {
        itemName : 'web dev',
        price : 2999
    },
    {
        itemName : 'app  dev',
        price : 5999
    },
    {
        itemName : 'data science',
        price : 12999
    }
]

const priceTopay = cousrePrice.reduce( (acc,item) => 
    item.price + acc,0)

console.log(priceTopay);