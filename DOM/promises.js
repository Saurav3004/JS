// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls,cryptography,network
//     setTimeout(function(){
//         // console.log(('async task is completed'));
//         // resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('promise consumed');
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task 2');
//         resolve("helllo")
//     },1000)
// }).then(function(user){
//     console.log(user)
// })


// const promiseThree = new Promise(function(resolve,reject){
//                 setTimeout(function(){
//                     resolve({username: 'Chai',email: 'chai@saurav.com'})
//                 },1000)
// })

// promiseThree.then(function(user){
//             console.log(user.username);
//             console.log(user.email);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:'saurav',password: '123'})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     } ,1000)
// })

// promiseFour.then((user)=>{
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(err){
// console.log(err);
// }).finally(()=>{
//     console.log('resolved')
// })


// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username:'javascript',password:"123"})
//         }else{
//             reject("JS went Wrong");
//         }
//     },1000)
// })

// async function running(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch (err){
// console.log(err);
//     }
// }

// running()

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = 3
//         if(error === 2){
//             resolve({
//                 username: 'The Boss',
//                 age: 123,
//                 class: 'upper'
                
//             })
//         }else{
//             reject('ERROR: Data has some error')
//         }
//     },1000)
// }).then(function(first){
//     return first.age
// }).then(function(second){
//     console.log(second);
// }).catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log("resolved or not??");
// })

// async function getAllusers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data);
//    }
//    catch (error){
//     console.log('E',error);
//    }
// }

// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
}).finally()