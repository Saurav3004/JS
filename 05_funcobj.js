function calculateCartprice(...num1){
    return num1
}
calculateCartprice(2)

// console.log(calculateCartprice(2,3,4));

const user = {
    username: "saurav",
    "Book Price": 199
}

function handleObject(anyObject){
        // console.log(`username is ${anyObject.usernames} and the book price is ${anyObject["Book Price"]}`);
}
// handleObject(user)

handleObject({
    username: "sammy",
    "Book Price": 99

})

const myNewArray = [200,400,100,600]
const myNewArray2 = [1,2,3,4]

function returnSecondValue(getArray){
    return getArray[1]
}
const a = returnSecondValue(myNewArray)
const b = returnSecondValue(myNewArray2)
// console.log(a, ",",b); 

//in arguements we pass the array in which we apply our method or in which we will find our results and further it goes to parameteric value and in function we return our paramteric value with their specific syntax....

// ...function name is use to rest in which we take values from arguements in array way 