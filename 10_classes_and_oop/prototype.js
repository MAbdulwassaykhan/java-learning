// let myName = 'khan    '
// let myColor = 'pink    '

// console.log(myName.trim().length,myColor);
// console.log(myName.trueLength,myColor.trueLength);


let myHeros = [ "thor" , "spiderman" ]

let heroPower = {
    thor : "hammer",
    spiderman : "sling"
}

Object.prototype.khan = function(){
    console.log(`khan is present in all objects`);
    
}

Array.prototype.hloKhan = function(){
    console.log(`khan is present in just array`);
    
}

// myHeros.khan()
// heroPower.khan()
// heroPower.hloKhan()
// myHeros.hloKhan()


// inheritance


const teacher ={
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'Js assignment',
    fullTime : true,
    __proto__ : teachingSupport
}
// teacher.__proto__ = User

// modren syntax

Object.setPrototypeOf(teachingSupport,teacher)

let UserNameOne = "khan123   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
    
}

UserNameOne.trueLength()
"muhammad".trueLength()
"khan345".trueLength()