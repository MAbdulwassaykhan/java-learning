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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


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
 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                                         // DATATYPE SUMMARY //

// Premetive  // 

// 7 types : string , number , boolean , null , undefined , symbol , bigInt .//

// const score = 200 
// const scoreValue = 100.7

// const isLogedIn = false
// const outsideTemp = null
// let userEmail;             // ==>  let userEmail = undefined 

// const id = Symbol('123')
// const anotherId = Symbol('123')

// //  console.log(id === anotherId);

// const bigNumber = 12345678901083839n


// // Referance (non Premetive)  //

// // array, object, function .//

// const heros = ["shakhtiman","nagraa","doga"];

// let myObj ={
//     name: "Ahmad",
//     age: 22, 
// }

// const myFunction = function(){

//     console.log("hello world");
    
// }

// console.log(typeof scoreValue);
// console.log(typeof isLogedIn);
// console.log(typeof outsideTemp);
// console.log(typeof bigNumber);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof score);
// console.log(typeof userEmail);
// console.log(typeof myFunction);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


                                         // STACK & HEAP MEMORY //
 
// stack (premetive) , heap (non-premetive)//


// let myName = "mabdulwassay"

// let anotherName = myName
// anotherName = "mkhan"

// console.log(myName);
// console.log(anotherName);

// let userOne = {
//     email : "mabdulwassay@mail",
//     upi : "user@done"
// }
// let userTwo = userOne
// userTwo.email = "mkhan@mail"

// console.log(userOne.email);
// console.log(userTwo.email);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                         // STRINGS //
 
// const name = "khan"
// const repoCount = 10
// const myAge = 23

// console.log(name + repoCount + " Value"); //==> dont use this technique, this technique is old

// console.log(`My name is ${name} , my repocount is ${repoCount} and my age is ${myAge}`);//use this technique its advance technique.

// const gameName = new String('cricket-g-b')

// console.log(gameName[5]);      // ==> e 
// console.log(gameName.__proto__); //==> {}
// console.log(gameName.length);    //==> 7
// console.log(gameName.toUpperCase());  //==> CRICKET


// console.log(gameName.charAt(4));  // ==> k
// console.log(gameName.indexOf('t')); //==> 6

// const newString = gameName.substring(1,5)
// console.log(newString);

// const anotherString = gameName.slice(-3,7)
// console.log(anotherString);

// const newStringTwo = "    khan    "
// console.log(newStringTwo);
// console.log(newStringTwo.trim());

// const url ="https://abdul.com/abdulwassay%20khan"
// console.log(url.replace("%20","-"));
// console.log(url.includes("muhammad"));

// console.log(gameName.split(""));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                         // NUMBERS //
                                         
// const score = 1020
// console.log(score);


// const balance = new Number(300)

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));

// const otherNumber = 23.89567
// console.log(otherNumber.toPrecision(3));

// const hundreds =1000000
// console.log(hundreds.toLocaleString('en-PA'));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                         //MATHS//

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

// console.log(Math.random()+1);
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random()*(max - min + 1)) + min);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                         //DATES & TIME//

// let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(typeof mydate);


// let myCreatedDate = new Date(2002,6,24,5,4,25)
// let myCreatedDate = new Date("2002-07-24")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate.toDateString());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getDate());

// // `${newDate.getDay()} and the time is`

// newDate.toLocaleString('default',{
//     weekday : "long"
// })

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++















