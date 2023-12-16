// let age = 12

// if(age>18){
// console.log("Adult")
// }else{
//     console.log("Not an Adult")
// }

// let balance = 100

// if(balance>50) console.log("test"),console.log("test2") // this is not a good approach....


// let userLoggedIn = true
// let debitCard = false

// if (userLoggedIn || debitCard) {
//     console.log("You Can buy course");
// }

let month = 3

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default");
        break;
}

/* 

falsy values are following below
 false , 0 , -0 , BigInt 0n , null , undefined , NaN


 */


 /*
 Truthy values are following below
 "0" , 'false' , " " , [] , {} , function(){}

 */

 const userEmail = []

 if(userEmail.length===0){
    console.log("Array is Empty");
 }

 const obj = {}

 if (Object.keys(obj).length===0) {
    console.log("Object is empty");
 }


// Nullish coalescing operator (??): null or undefined

let val1,val2,val3;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 10 ?? 20
console.log(val1);
console.log(val2);
console.log(val3);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80"); 
