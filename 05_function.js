function first(){
    console.log("S")
    console.log("A")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("V")
}
// first  -----> this denotes the referrence
// first() -------> this denotes the execution


// first

// first()

function addTwoNumbers(number1,number2){ // (number1,number2) these are parameters
    let result = number1 + number2
    // console.log("saurav") // here we find this console becuase this is before return keyword
    // return result 
    return number1 + number2

    console.log("saurav") // after return keyword function will not return anything after returning the value that means console.log("saurav") will not be print but if we console this before the return value then we will definitely getting the console value....
}

const result = addTwoNumbers(2,3)  // (2,3) this is arguement
// console.log(result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("enter a valid username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("saurav"))
