let marvel_heros = ["Ironman","Thor","Hulk"]
let dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

let all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);
// console.log(all_heros[4]);

// in push we can say that the we are pushing the values in original array but in concat we have to store the value in new variable then we can access the new array..


let all_new_heros = [...marvel_heros, ...dc_heros]

//this is called spreading this is better than using concat ....we spread all the elements and store in a new variable

// console.log(all_new_heros);


// now here is a new prototype comes name "FLAT" this is use to merge all sub-merge arrays in a array


let newArray = [1,2,3,[4,5,6,7],8,9,[10,11,[12]]]

let store = newArray.flat(3)

// console.log(store)


// const check = (Array.isArray("Saurav"))
// console.log(check)
// result will be false

const check = (Array.from("saurav"))
console.log(check)
// result will be array with all letters => 's','a','u','r','a','v'

console.log(Array.from({name: "saurav"}))  //interesting
// it will be give an empty array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));