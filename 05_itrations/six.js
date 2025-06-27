

// const coding = ["js","rb","py","swift","cpp"]

// const { version } = require("react")

// const languages = coding.forEach( (items)=>{
//     // console.log(items);
//     return items

// } )
// console.log(languages);

// const myNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// const newNum = myNums.filter( (num)=> num > 8 )

// const newNum = myNums.filter((num)=> {
//     return num > 8
// })

// const newNum = []
// myNums.forEach((num)=>{
//     if (num > 7) {
//         newNum.push(num)
//     }
// })
// console.log(newNum);



const books = [
    {title : 'Book One', genre : 'fiction', publish : 1992, edition: 2002},
    {title : 'Book Two', genre : 'non-fiction', publish : 1993, edition: 2005},
    {title : 'Book Three', genre : 'science', publish : 1994, edition: 2022},
    {title : 'Book Four', genre : 'history', publish : 1995, edition: 2006},
    {title : 'Book Five', genre : 'fiction', publish : 1996, edition: 2009},
    {title : 'Book Six', genre : 'science', publish : 1997, edition: 2008},
    {title : 'Book Seven', genre : 'non-fiction', publish : 1998, edition: 2017},
    {title : 'Book Eight', genre : 'history', publish : 2000, edition: 2020},
    {title : 'Book Nine', genre : 'science', publish : 2003, edition: 2015},
    {title : 'Book Ten', genre : 'history', publish : 2009, edition: 2018},
]

let userBooks = books.filter((bk)=> bk.genre === 'history')
 userBooks = books.filter((bk)=> {return bk.publish >= 1995})
 userBooks = books.filter((bk)=> {return bk.edition >=2009})

console.log(userBooks);
