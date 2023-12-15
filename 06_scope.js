if(true){
    let a = 1
    
    const b = 2
    // console.log("INNER",a);
}
let a = 200

// console.log(a);
// console.log(b);
// console.log(c);

// In this part we are discussing about scope, in the curly braces we know that there is a local and global scope in curly braces called local scope and outside of this braces called global scope but var keyword was creating the problem in programming because its try to use outside the curly braces or scope but let and const is very helpful because this follows local scopic rules. if we create a variable and constant outside of the braces or globally it can be use in local scope or it can be use in curly braces but not vice versa if we are declaring the value to a variable or constant in local scope or in curly braces then it will use in only in curly braces not outside of that......


function one(){
    const username = "saurav"
    function two(){
        var website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    // two()
}
one()


if(true){
    const username = "saurav"
    if(username === "saurav"){
       const website = "youtube"
    //    console.log(username + website);
    }
    // console.log(website);
    // console.log(username);
}

// +++++++++++++++++++ interesting +++++++++++++++++


console.log(addOne(5))
function addOne(num) {
    return num + 1
}


// addTwo(5) when the function is stored in variable then we can initialize like this because it gives us error and this is called hoisting in which we cant proceed like this 
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5)) // ===> its console will not throw any type of error....
