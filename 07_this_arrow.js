const user = {
    name: "saurav",
    price: 199,
    userInfo: function(){
        // console.log(`${this.name},welcome to the website`);
        // console.log(this);
    }
};
// user.userInfo()
// user.name = "shubham"
// user.userInfo()
// console.log(this);

// const chai = function(){
//     const user = "saurav"
//     console.log(this.user);
// };

// chai() ====> it gives "undefined"

const chai =  () => {            // => arrow Function
    const user = "saurav"
    console.log(this.user);
};

// chai()   it also gives same 'undefined'

const addTwo = (num1,num2) => {
     return num1 + num2
};

// console.log(addTwo(2,3))


// const addTwoOther = (num1,num2) =>  (num1 + num2)
// this is called implicit return , in which we execute the function value in same line then we dont need to write return keyword.....in paranthesis() we dont need to write return keyword but in curly braces {} we have to write return keyword which is mandatory..........

// console.log(addTwoOther(2,3))

// Immediately Invoked Function Execution  IIFE

// IIFE ka use isliye kiya jaata hai kyuki kbhi kbhi global scope ka pollution means variables ya jo bhi declaration krte hai globally usse hume problem hoti hai to wo problem naa ho isliye hum IIFE ka use karte hain!!!!

(function chai(){
    // named IIFE
    console.log(`DONE`);
})();

( (name) => {
    // simple IIFE 
    console.log(`DONE AGAIN ${name}`)
})("saurav")
         


// IIFE ka use paranthesis se hota hai hum pure function ko ek paranthesis me wrap krdenge fir hume function ko execute krne ke liye function ka naam likhne ki jrurt nhi pdegi hum wrap krne k baad uske aage paranthesis lgaake execute kr sakenge ye immediately invoke krdega IIFE

//IIFE ko use krne k liye pehle ke saare function ko hume end krna pdega by ; semi-colon
