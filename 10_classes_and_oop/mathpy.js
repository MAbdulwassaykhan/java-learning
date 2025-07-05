const discripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// console.log(discripter);

let Chai = {
    name : "gingerchai",
    price : 150
}
// console.log(Object.getOwnPropertyDescriptor(Chai,"name"));


Object.defineProperty(Chai,'name',{
    writable: false,
    enumerable: true
})
// console.log(Object.getOwnPropertyDescriptor(Chai,"name"));

console.log(Chai);





