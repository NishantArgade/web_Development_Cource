const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = '127.0.0.1';

const home = fs.readFileSync('./index.html');
const About = fs.readFileSync('./About.html');
const contact = fs.readFileSync('./contact.html');
const services = fs.readFileSync('./services.html');

const server = http.createServer((req, res) => {
   console.log(req.url);
   url = req.url;
   res.statusCode = 200;
   res.setHeader("Content-Type", "text/html");
   
  
   if(url == "/") {
      res.end(home);

   }

   else if(url == "/About") {
      res.end(About);

   }

   else if (url == "/Contact") {
      res.end(contact);

   }

   else if (url == "/Services") {
      res.end(services);

   }

   else {
      res.statusCode = 404;
      res.end("<h1>404 are not found</h1>");

   }

});


server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});