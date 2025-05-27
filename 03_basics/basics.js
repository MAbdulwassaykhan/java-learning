                                                      // FUNCTIONS //


function myName() {
console.log("k");
console.log("h");
console.log("a");
console.log("n");
console.log("a");
}
// myName();

// function addTwoNumbers(number1,number2) {
//     console.log(number1 + number2);
    
// }
// addTwoNumbers(5,"empty")

function addTwoNumbers(number1,number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(5,6)
// console.log("Result",result);


function loggedInUser(username = "saim") {
    if (username === undefined) {
        console.log("plase enter username");
        return
    }

    return `${username} just logged in`
}
console.log( loggedInUser("khan2002"));







