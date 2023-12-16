// forof loop

let myarray = [1,2,3,4]

for (const num of myarray) {
    // console.log(` value of i is ${num}`);
    
}
let name = "Saurav Jha"
for (const userEach of name) {
   if(userEach === " "){
    continue;
   }
    // console.log(`each word is ${userEach}`);
   
}

// Map

// const map = new Map()
// map.set('IN','INDIA')
// map.set('FR','FRANCE')
// map.set('ENG','ENGLAND')
// map.set('IN','INDIA')

// console.log(map);

// for (const [key,value] of map) {
    // console.log(key,':-',value);
    
// }


// forin loop
 const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by app'
 } 

 for (const key in myObject) {
    // console.log(`${key}:${myObject[key]}`);
    
 }

 let myArrayNew = [1,2,3,4,5]
 
 for (const key in myArrayNew) {
    // console.log(`${key} is the index of  ${myArrayNew[key]}`);
    
 }

//  const map = new Map()
// map.set('IN','INDIA')
// map.set('FR','FRANCE')
// map.set('ENG','ENGLAND')

// for (const [key,value] in map) {
//    console.log(key,value); // This will not execute anytype of result because map is not iterable and if anything is not iterable then we cant perform forin loop on it....
// }

const coding = ["js","ruby","python","cpp","java"]

// for (let i = 0; i < coding.length; i++) {
//    const element = coding[i];
//    console.log(element);
   
// }

// ++++++++++++++++++ forEach loop ++++++++++++++++++++++

// coding.forEach(function (val) {
//    console.log(val);
// })     // A Normal Function

coding.forEach((val)=>{
      // console.log(val);
}) // This is Arrow Function

function printMe(item){
// console.log(item)
}

coding.forEach(printMe)

coding.forEach(function (item,index,arr){
      //  console.log(arr);
})

const myCoding = [
   {
      languageName: "javascript",
      languageFileName: "js"
   },
   {
      languageName: "python",
      languageFileName: "py"
   },
   {
      languageName: "cpp",
      languageFileName: "c++"
   },
   {
      languageName: "java",
      languageFileName: "java"
   }
]

myCoding.forEach( (item,index,arr) => {
            console.log(item.languageFileName);
})
