// For //

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the best number");
        
//     }
//     console.log(element);
    
// }

for (let i = 1; i <=10 ; i++) {
    // console.log(`Table of ${i} :`);
    
    for (let j = 1 ; j <= 10 ; j++) {
        // console.log(i + '*' + j + '=' + i*j);  
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArray = ["Thor","Ironman","Superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// Break & Continue //


for (let index = 1; index <= 20 ; index++) {
    if (index == 8 ) {
        // console.log(`Detected index 8`);
        break
    }
    // console.log(`the value of index is ${index}`);
    
    
}
for (let index = 1; index <= 20 ; index++) {
    if (index == 8 ) {
        // console.log(`Detected index 8`);
        continue
    }
    // console.log(`the value of index is ${index}`);
}
