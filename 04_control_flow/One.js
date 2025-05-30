// if

// <,>,<=,>=,==,!=,===

// const isUserLoggedIn = true
// const temperature = 51
// if ( temperature === 50 ) {
//     console.log("temp is equals to 50");
// }else{
// console.log("temp not equals to 50");
// }

// const score = 200
// if(score > 100){
//     let power = "swimmer"
//     console.log(`khan is the best ${power}`)
// }
// console.log(`khan is the best ${power}`)

// const balance = 1000
// if (balance > 500) console.log("its less"), console.log("but not best");

// const balance = 1500
// if (balance < 500) {
//     console.log("its less then 1500");
// }else if (balance < 800) {
//     console.log("its less then 1500");
// }else if (balance < 1400) {
//     console.log("its less then 1500");    
// }else{
//     console.log("its equals then 1500");
// }


const isUserLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true
const userLoggedInFromGuest = true

if (isUserLoggedIn && debitCard) {
    console.log("allow it");
    
}
if (userLoggedInFromEmail || userLoggedInFromGoogle || userLoggedInFromGuest) {
    console.log("user logged in");
}

    



