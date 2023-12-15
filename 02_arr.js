const myArr = [0,1,2,3,4,5]
const myHeroes = ["Shaktiman","Hero"]
const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[0]);

// myArr.push(6)
// myArr.pop()

// myArr.unshift(78)
// myArr.shift()
// const newArr = myArr.join()
// console.log(typeof myArr);
// console.log(typeof newArr);
console.log("A" , myArr)
let arrN1 = myArr.slice(1,3)

console.log(arrN1)
console.log("B" , myArr)

let arrN2 = myArr.splice(1,3)
console.log(arrN2)
console.log("C" , myArr)

// splice manipulates the original array whereas slice shows only its indexes'value and doesn't change in the original array!!!