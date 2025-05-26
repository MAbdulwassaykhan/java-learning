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




                                            

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

