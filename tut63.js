// <!-- What is Node.Js?

// Node.Js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
// Node.Js is designed to build scalable network applications.
// Node.Js can be download from the official Node.js website.
// Node.Js is a free and open-source server environment.
// Node.Js allows us to run JavaScript on the server.
// Node.Js can run on multiple operating systems.

// Why use Node.Js?

// You can use JavaScript in the entire stack.
// Many famous companies use Node.Js as their backend.
// Node.Js comes with a lot of useful built-in modules.
// Node.Js is fast. -->

// <!-- Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.  -->

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
//   res.end("welcome,Nishant in Node run Time environment for java");
     res.end(`<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>styling and button</title>
     </head><style>
     .c1{
         border: 3px solid red;
         border-radius: 12px;
         background-color: salmon;
     
     
     }
     #google{
         text-decoration:none ;
         margin: 5px 9px;
         font-size: 20px;
         color:blue;
     
     }
     #button{
         margin: 5px 9px;
         font-size: 15px;
     }
     #button:hover{
         cursor:pointer;
     background-color: slategrey;
     color: white;
     
     
     }
     
     a:visited{
     background-color: white;
     }
     a:active{
         background-color: brown;
     }
     </style>
     <body>
         <header class="c1">
             <h1>  styling and button</h1>
         <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt asperiores doloribus fugiat mollitia vero impedit libero, expedita, ducimus cumque repudiandae, distinctio aut magni quas?</div>
      
         <a href="https://google.com" id="google"
          target="_blank">go to google</a>
     
     
         <button id="button">submit Now</button>
     
     
     
     </header> 
         
     </body>
     </html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});