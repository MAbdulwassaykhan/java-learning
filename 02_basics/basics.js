                                            //ARRAY//
// Array part 1//

// const myArr = [0,1,2,3,4,5]
// const myHeros = ["thor","captain america","iron man"]

// const numbers = new Array(1,2,3,4,5)

// console.log(myArr.length);       // ==> 

// Array methods//

// myArr.push(5)           // ==> [0,1,2,3,4,5,5]
// myArr.push(6)           // ==> [0,1,2,3,4,5,5,6]
// myArr.push(7)           // ==> [0,1,2,3,4,5,5,6,7]
// myArr.pop()             // ==> [0,1,2,3,4,5,5,6,]

 
// myArr.unshift(6)   // ==> put valus in start of array.
// myArr.shift()
// myArr.shift()


// console.log(myArr.includes(6));
// console.log(myArr.indexOf(3));


// let newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);



// console.log("original",myArr);   //==> this remains same.

// const myn1 =myArr.slice(1,4)    
// console.log(myn1);
// console.log("slice",myArr);      //==> it does not menipulate the array & remain same.

// const myn2 = myArr.splice(1,4)
// console.log(myn2);
// console.log("splice",myArr);     //==> it manipulate the array & cut the selected part from array.


// Arrar part 2//

// const marvel_heros = ["Thor","Iranman","Spiderman"]
// const dc_heros = ["Superman","Flash","Batman"]
// marvel_heros.push(dc_heros) 
// console.log(marvel_heros);           // ==> ["Thor","Iranman","Spiderman",["Superman","Flash","Batman"]]
// console.log(marvel_heros.length);    // ==> 4
// console.log(marvel_heros[3][1]);     // ==> Flash


// const all_heros = marvel_heros.concat(dc_heros)      //   --|
// console.log(all_heros);                              //     |  //  ==> [ 'Thor', 'Iranman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]  
                                                        //     |--->// both methods work same but second one is used the most
// const all_new_heros = [...marvel_heros,...dc_heros]  //     |
// console.log(all_new_heros);                          //   --|  //  ==> [ 'Thor', 'Iranman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


// const anotherArr = [1,2,3,4,[5,6,7],8,9,10,[11,12,[13,14,15],16,17],18,19,20]
// const real_anotherArr = anotherArr.flat(Infinity)
// console.log(real_anotherArr);                              // ==> [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]



// console.log(Array.isArray("Khan1234"));           // ==> false
// console.log(Array.from("Khan1234"));              // ==> ['K','h','a','n','1','2','3','4']
// console.log(Array.from({name:"Khan1234"}));       // ==> []



// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1,score2,score3));          // ==> [100,200,300]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                            // OBJECTS //

// Object part 1 //

//Singleton
//object.create


// object literals

// const mySym = Symbol("key1")

// const JsUser = {
//     name : "abdulwassay",
//     "full name": "M.abdulwassay,khan",
//     age : 23,
//     location : "Multan",
//     [mySym] : "mykey1",
//     email : "abdulwassay@gmail.com",
//     isLoggedIn : false,
//     lastLoggedIn : ["Monday","Friday","Sunday"]
// }

// // console.log(JsUser.email);
// // console.log(JsUser["email"]);
// // console.log(JsUser["full name"]);
// // console.log(JsUser[mySym]);

// // JsUser.email = "abdulwassay@chatgpt"
// // Object.freeze(JsUser)
// // JsUser.name = "Khan1234"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello Js User");  
// };

// JsUser.greetingTwo = function(){
//     console.log(`Hello Js User, ${this.name}`);  
// };
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



//Object part 2 //



const tinderUser = new Object()      // ==>this is singleton object 
// const tinderUser = {}                   // ==> this is non-singleton object but both work like same  
tinderUser.name ="Raza"
tinderUser.id  ="abc123"
tinderUser.email = "raza@gmail.com"
tinderUser.age = 23
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    fullname : {
        userfullname :{
            firstName : "Saim",
            lastName : "raza",
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastName);



const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}
// console.log(obj1);
// console.log(obj2);
// console.log(obj1,obj2);                          // ==> this way is ok to write but not best to write.  
// const obj4 = Object.assign({},obj1,obj2,obj3)    // ==> this way is ok to write but not best to write.
const obj4 = {...obj1,...obj2,...obj3}              // ==> this way is the best way to write.
// console.log(obj4);


const users = [
    {
        id : 1,
        email : "k@gmail.com"
    },
       {
        id : 2,
        email : "s@gmail.com"
    },
       {
        id : 3,
        email : "a@gmail.com"
    },
]
users[1].email
// console.log(users);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('fullname'));


// Object part3 //

const course = {
    coursename : "JAVASCRIPT",
    price : "1099rs",
    courseinstructure : "Abdulwassay"
}

// course.courseinstructure
const {courseinstructure : instructure} = course

console.log(instructure);

// // const navbar = ({company}) =>{    --|
// //                                     |}}
// // }                                   | }}==> this is also used fo object destructuring in react.
// //                                     |}}
// // navbar (company = "Khan#123")     --|  

// {
//     "name" : "khan",
//     "course" : "Javascript",      // ==> this is in jason formate.
//     "price" : "free"
// }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

