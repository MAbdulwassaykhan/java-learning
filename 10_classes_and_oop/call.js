function SetUserName(username){
    this.username = username
    console.log("called");
    
}

function createUser(username,email,passward) {
    SetUserName.call(this,username)
    
    this.email = email
    this.passward = passward
}

const chai = new createUser("tea","tea@fb.com",12345)
    console.log(chai);

// createUser()