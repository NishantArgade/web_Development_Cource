let filesystem = require('fs');//fs module can manupulates all action releted to files.
 
let read = filesystem.readFileSync("nisha.text","utf-8");
console.log(read);

let read1 = read.replace("nishant","Aniket");
console.log(read1);

filesystem.writeFileSync("new.text","text hiiiiiiiiiiiii");
// filesystem.deletFileSync("new.text","text hiiiiiiiiiiiii");