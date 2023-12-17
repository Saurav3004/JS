const coding = ["java","javascript","cpp","python"]

const values = coding.forEach( (item) => {
// console.log(item);
return item
})

// console.log(values); // forEach loop doesn't return any value so this shows "UNDEFINED"

const nums = [1,2,3,4,5,6,7,8,9,10]

const get = nums.filter( (num) => {
   return num > 4  // {} in this return keyword is mandatory in filter or in function
}
    )
// console.log(get);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userDemand = books.filter( (bk) => {
     let comes = bk.publish >= 1995 && bk.genre === 'History'
     return comes
  })
// console.log(userDemand);

const addTen = [1,2,3,4,5,6]

const newArray = []
const newArray1 = []
const newArray2 = []


addTen.forEach( (num,index,arr) => {
    if(index+1>=arr.length){
        return 0
    }
    const subMerged = arr[index + 1] + 10 
    newArray.push(subMerged)
}) //By if method in which we are increasing the value from 01 index
addTen.forEach( (num,index,arr)=> {
    const subMerged1 = arr[index]+10

    newArray1.push(subMerged1)
})
     
addTen.forEach( (num,index,arr) => {
    const subMerged2 = num + 10

    newArray2.push(subMerged2)
})
// console.log(newArray);
// console.log(newArray1);
// console.log(newArray2);

//  const newNums = addTen.map( (num) => {
//     return num + 10
// })
// console.log(newNums); //BY MAP METHOD

const me = [1,2,3,4,5,6,7,8]

const newNumers = me.filter((number,index,arr)=>{
    return number > 4
}).map((number)=>{
    return number + 10
}).map((number)=>{
    return number + 1 
})
// console.log(newNumers)

// ++++++++++++++++++++++++++ REDUCE +++++++++++++++++++++++++++++++++

const check1 = [1,2,3]
let initialValue = 0

// const final = check1.reduce((accumulator,currentValue)=>{
//     // console.log(`accu: ${accumulator},currv: ${currentValue}`);
//     return (accumulator + currentValue )
// },initialValue)

// console.log(final);


const shoppingCart = [
    {
        itemPurchase: "Shirt",
        price: 2999,
        ratings: "Best"
    },
    {
        itemPurchase: "T-shirt",
        price: 1999,
        ratings: "Average"
    },
    {
        itemPurchase: "towel",
        price: 299,
        ratings: "Good"
    },
    {
        itemPurchase: "Shirt",
        price: 1499,
        ratings: "Best"
    },
    {
        itemPurchase: "Jeans",
        price: 999,
        ratings: "Best"
    }
]

const SelectedItems = shoppingCart.filter((select)=>{
    // console.log(select);
    return select.price >1000
}).map((select)=>{
    // console.log(`following are higher than 1000`);
    console.log(select);
    return select.price
}).reduce((acc,currentValue)=>{
    console.log(currentValue);
    return acc + currentValue
},0)

console.log(`Total price of items are ${SelectedItems}`);
console.log(SelectedItems);


