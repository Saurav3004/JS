const mySym = Symbol("key1")



const jsUser = {
    name: "saurav",
    age: 999,
    [mySym]: "myKey1",
    //when we use symbol then we use [] these brackets "SQUARE BRACKETS"
    "full name": "Saurav jha",
    email: "saurav@google/yahoo.com",
    location:"Delhi",
    isLoggedIn: false,
    verified: false,
    lastLoginDays: ["Monday","Thursday"]
}

// console.log(jsUser.isLoggedIn)
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym])


jsUser.email = "saurav@gmail.com"
// Object.freeze(jsUser)
// freeze is used to dont change the value by anychanging in objects!!!
jsUser.email = "saurav@yahooo.com"

// console.log(jsUser)

jsUser.greeting = function() {
    console.log(`Hello JS user ${this.name}`);
}

console.log(jsUser.greeting());