// singleTon Object
// const tinderUSer = new Object()

const tinderUSer = {}

tinderUSer.id = "123abc"
tinderUSer.name = "sam"
tinderUSer.isLoggedIn = false

// console.log(tinderUSer);

const regularUSer = {
      email: "some@gmail.com",
      fullname: {
        userfullname: {
            firstname: "Saurav",
            lastname: "Jha"
        }
      }

}
// console.log(regularUSer.fullname.userfullname.firstname);

const obj1 =  {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

// const obj3 = {obj1,obj2}
// console.log(obj3);  // it will give object in a object

// const obj3 = Object.assign({},obj1,obj2) // {} this will denote the target syntax of returning object

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
      {
        id:1,
        email:"user1@mail.com"
      },
      {
        id:2,
        email:"user2@mail.com"
      },
      {
        id:3,
        email:"user3@mail.com"
      },
      {
        id:4,
        email:"user4@mail.com"
      }


]

// console.log(users[3].id);
// console.log( Object.keys(tinderUSer))
// console.log( Object.values(tinderUSer))
// console.log( Object.entries(tinderUSer))

console.log(tinderUSer.hasOwnProperty(`id`));