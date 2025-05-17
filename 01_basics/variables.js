                                         // VARIABLES // 

// const accountId = 1234
// let accountEmail ="Abdulwassay@gmail"
// var accountPassward ="102030"
// accountCity ="multan"

// //  accountId =505

// accountEmail="khan@gmail"
// accountPassward="1243"
// accountCity="lahore"



// console.table([accountId,accountEmail,accountPassward,accountCity])

                                        // DATATYPE //

// let score = 123  // ==> number
// let score = "123abc"  //==> number,NaN
//let score = null   // ==> 0
//let score = undefined  // ==> NaN
//let score = true  // ==> 1,  false ==> 0
// let score = "khan"


// // const {score} = req.body
// console.log(typeof (score));

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);



// let isLogedIn = "" //==> false
// let isLogedIn = 1   //==>true
// let isLogedIn = 0   //==>false
// let isLogedIn ="khan"   //==>true

// let booleanIsLogedIn = Boolean(isLogedIn)

// console.log(booleanIsLogedIn);

// let somenumber = 234  //==> 234, string

// let stringNumber = String(somenumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

                                         // CONVERSION OPERATIONS //

// let str1 = "Hello"
// let str2 = " Abdulwassay"
// let str3 = " Khan"

// let str4 = str1 + str2 + str3 //  ==> Hello Abdulwassay Khan
// console.log(str4);



// console.log(2+2);  // ==> 4
// console.log(2-2);  // ==> 0
// console.log(2*2);  // ==> 4
// console.log(2/2);  // ==> 1
// console.log(2**3); // ==> 8
// console.log(2%4);  // ==> 2

// console.log(2+"2");    // ==> 22
// console.log("2"+2);    // ==> 22
// console.log("2"+2+2);  // ==> 222
// console.log(2+2+"2");  // ==> 42

// console.log((3+2)*5%(4/5)); // ==> 0.1999999999....


// let num1,num2,num3
// num1 = num2 = num3 =2+3  // ==> 5
// console.log(num2);

// let gameCounter = 101  // ==> 101
// gameCounter++  // ==> 102
// ++gameCounter  // ==> 102
// console.log(gameCounter); // ==> 103

                                         // COMPARISON //

// console.log(2 > 1);    // ==> true
// console.log(2 >= 1);  // ==> true
// console.log(2 < 1);  // ==> false
// console.log(2 <= 1);  // ==> false
// console.log(2 == 1);  // ==> false
// console.log(2 != 1);  // ==> true
// console.log(2 >! 1);  // ==> true

// console.log("2">2);       // ==> false
// console.log(2>"02");   // ==> false


// console.log(null > 0);   // ==> false
// console.log(null < 0);   // ==> false
// console.log(null == 0);   // ==> false
// console.log(null >= 0);   // ==> true
// console.log(null <= 0);   // ==> true

// NOTE //
// The reason is that an equality check == and comparisons > < >= <= works differently.
// Comparison converts "null" to a number, treating it as "0". thats why 
// (3)null >= 0 is true and (1)null > 0 is false.// 

// console.log(undefined > 0);   // ==> false
// console.log(undefined < 0);  // ==> false
// console.log(undefined == 0);  // ==> false
// console.log(undefined >= 0);  // ==> false
// console.log(undefined <= 0);  // ==> false

// console.log(undefined > null);  // false
// console.log(undefined < null);  // false
// console.log(undefined == null);  // true
// console.log(undefined >= null);  // false
// console.log(undefined <= null);  // false
 

// console.log("2" === 2); // ==> false  // because "==="it checks datatype also.
// console.log("3"==="3"); // ==> true
// console.log(5 === 5);   // ==> true
 

                                         // DATATYPE SUMMARY //

// Premetive  // 

// 7 types : string , number , boolean , null , undefined , symbol , bigInt .//

const score = 200 
const scoreValue = 100.7

const isLogedIn = false
const outsideTemp = null
let userEmail;             // ==>  let userEmail = undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

 console.log(id === anotherId);

const bigNumber = 12345678901083839n


// Referance (non Premetive)  //

// array, object, function .//

const heros = ["shakhtiman","nagraa","doga"];

let myObj ={
    name: "Ahmad",
    age: 22, 
}

const myFunction = function(){

    console.log("hello world");
    
}

console.log(typeof scoreValue);
console.log(typeof isLogedIn);
console.log(typeof outsideTemp);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof score);
console.log(typeof userEmail);

