function calculateCartprice(...num1) {
    return (num1)
}
console.log(calculateCartprice(100,200,400,500,700,800,9996,798));
const totalPriceArray = (calculateCartprice(100, 200, 400, 500, 700, 800, 9996, 798));
// const finalListPrice = totalPriceArray.map((items,index,array)=>{
//     if(array[index]>800){
//          return array[index] += 4
//     }else{
//         return array[index];
//     }
//  }).reduce((accu,currentVal)=>{
//     return accu + currentVal
//  },0)
//  console.log(finalListPrice);
 




const user = {
    username: "saurav",
    "Book Price": 199
}

function handleObject(anyObject) {
    // console.log(`username is ${anyObject.username} and the book price is ${anyObject["Book Price"]}`);
}
// handleObject(user)

handleObject({
    username: "sammy",
    "Book Price": 99

})

const myNewArray = [200, 400, 100, 600]
const myNewArray2 = [1, 2, 3, 4]

function returnSecondValue(getArray) {
    return getArray[1]
}
const a = returnSecondValue(myNewArray)
const b = returnSecondValue(myNewArray2)
console.log(a, ",",b); 

//in arguements we pass the array in which we apply our method or in which we will find our results and further it goes to parameteric value and in function we return our paramteric value with their specific syntax....

// ...function name is use to rest in which we take values from arguements in array way 