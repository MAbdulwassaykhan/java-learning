class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Khan`
    }
    set password(value){
        this._password = value
    }
    
}

const myAccount = new User('khan@gmail.com',"ABCD")
console.log(myAccount.email);
