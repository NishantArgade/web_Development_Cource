let fs = require('fs');

 fs.readFileSync("nisha.text","utf-8",(File_errr,File_data)=>{
     console.log(File_data)
 });

 console.log("i am that who execute first as readfile do his read work")