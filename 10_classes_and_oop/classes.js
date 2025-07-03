// // ES6

// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
        
//     }

// }

// const code = new User("khan","khan@fb.com",123)

// console.log(code);
// console.log(code.encryptPassword());
// console.log(code.changeUsername());


// Behind the scene

function User(username,email,password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}
User.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`
}

const chai = new User("khan","khan@fb.com",123)

console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

