const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("running async task");
        resolve()
    },1000);
    
})
promiseOne.then(function(){
    console.log("consuming resolve");
    
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("running async task 2");
        resolve()
    },1000);
    
})
promiseTwo.then(function(){
    console.log("task 2 complete");  
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: "khan",email: "abdulkhan@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({userName:"khan2",email:"khanabdul@gmail.com"})
        }else{
            reject('ERROR : something went wrong')
        }
    },1000)
})
promiseFour
.then(function(user){
    console.log(user);
    return user.userName
})
.then(function(userName){
    console.log(userName);
    
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("the promise will be either resolved or rejected ");
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        error = false
        if (!error) {
            resolve({username:"javascript",passward:1234})
        }else{
            reject("ERROR : Js is not working well")
        }
    },1000)
})

async function consumPromiseFive() {
   try {
     const response = await promiseFive
    console.log(response);
    
   } catch (error) {
    console.log(error);
    
   }
}

consumPromiseFive()

// async function getAllUsers() {
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
    
})



