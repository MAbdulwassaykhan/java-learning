                                                     // FUNCTIONS //

// // Functions & parameters //
 
// function myName() {
// console.log("k");
// console.log("h");
// console.log("a");
// console.log("n");
// console.log("a");
// }
// myName();

// function addTwoNumbers(number1,number2) {
//     console.log(number1 + number2);
    
// }
// addTwoNumbers(5,"empty")

// function addTwoNumbers(number1,number2) {
    // let result = number1 + number2
    // return result
    // return number1 + number2
// }
// const result = addTwoNumbers(5,6)
// console.log("Result",result);


// function loggedInUser(username = "saim") {
//     if (username === undefined) {
//         console.log("plase enter username");
//         return
//     }

//     return `${username} just logged in` 
// }
// console.log( loggedInUser("khan2002"));


// // Functions with objects//


// function calculateCartPrice(val1,...num1) {
//     return num1
// }
// console.log(calculateCartPrice(100,200,300,400))

// const user = {
//     username : "Ubaid",
//     price : 999
// }
// function handleObject(anyobject) {
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}.`);
// }
// handleObject(user)
// handleObject({
//     username:"saim",
//     price:599
// })

// const newArray = [500,600,700,800]
// function returnSecondValue(getArray) {
//     return getArray[4]
// }
// console.log(returnSecondValue(newArray));
// console.log(returnSecondValue([400,150,250,660,890]));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                    // SCOPE //

// // Global & Local Scope //



// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("inner : ",a);   
// }
// console.log(a);
// console.log(b);
// console.log(c);


// // Scope level & mini hoisting //


// function one() {
//     const username = "ahmed muneeb"
//     console.log(username);
    
//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()

// if (true) {
//     const username = "mubeen asif "
//     if (username === "mubeen asif ") {
//         const website = "youtube "
//         console.log(username + website);
//     }
    // console.log(website);
// }
// console.log(username);


// console.log(addOne(5));
// function addOne(num){
//     return num + 1
// }



// const addTwo = function(num){
//     return num + 2
// }
// console.log(addTwo(5));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                     // THIS & ARROW FUNCTIONS //











