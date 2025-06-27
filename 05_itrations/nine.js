const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)
// const myTotal = myNums.reduce( (acc,currval) => (acc + currval),0)
// console.log(myTotal);

const shopingCart = [
    {
        itemName:'js' ,
        price : 1999
    },
    {
        itemName: 'py' ,
        price : 2999
    },
    {
        itemName:'react' ,
        price : 3999
    }
]

const totalPricePay = shopingCart.reduce( (acc,item) => acc + item.price,0)
console.log(totalPricePay);


