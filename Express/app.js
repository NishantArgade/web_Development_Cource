const express = require("express")
const path = require('path')
const app = express();
const port = 80;

//Express specific stuff.
app.use('/static', express.static('static'))
app.use(express.urlencoded())
//pug specific stuff.

//1.set templete engine .
app.set('view engine', 'pug')

//2.set views directory for pug.
app.set('views', path.join(__dirname, 'views'))

//3.our pug demo end point.
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there! thanx' });
//     });

//3.our pug demo end point.
app.get("/", (req, res) => {
    // const con="hello how are you ?"
    // const param={'title':"this is my pug title",'content':con}

    res.status(200).render('index.pug');
});

app.post("/", (req, res) => {
    console.log(req.body);
    const param = { "content": " your form submited successfuly !" }
    res.status(200).render('index.pug', param);

});

// app.get("/",(req,res)=>{
// res.send("this is my first express app");
// });
// app.get("/About",(req,res)=>{
// res.status(404).send("this is my About first express app");
// });
// app.post("/About",(req,res)=>{
// res.status(404).send("this post req is my About first express app");
// });
// app.get("/Contact",(req,res)=>{
// res.send("this is my Contact first express app");
// });
// app.get("/Services",(req,res)=>{
// res.send("this is my Services first express app");
// });
// app.get("/this",(req,res)=>{
// res.status(404).send("this page not found ");
// });

app.listen(port, () => {
    console.log(`the app started on port ${port}`)
})