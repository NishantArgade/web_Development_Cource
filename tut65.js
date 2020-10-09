// Synchronous or blocking
// - line by line execution

const fs1 = require('fs');
let a= fs1.readFileSync("nisha.text","utf-8")
         console.log(a) ;
    
     console.log("i am aniket");
    


    // Asynchronous or non-blocking

    // - line by line execution not guaranteed
    // - callbacks will fire
const fs = require("fs");
fs.readFile("nisha.text", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");