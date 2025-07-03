
const user = {
    username: "khan",
    loginCount: 6,
    signedIn: true,

    getUserDetail : function(){
        // console.log("GET USER DETAIL FROM DB");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
    

}

// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);

function User(username,logedinCount,isLogedIn){
    this.username = username
    this.logedinCount = logedinCount
    this.isLogedIn = isLogedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}
const userOne = new User('khan1',5,true)
const userTwo = new User('khan3',2,false)

console.log(userOne);
console.log(userTwo);



