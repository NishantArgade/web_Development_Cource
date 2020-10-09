const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;
const bodyparser=require("body-parser");// used for to store post req data from web body to the mongodb.
const mongoose = require('mongoose');//used for connection btween node.js and mongodb.
mongoose.connect('mongodb://localhost/contactData', {useNewUrlParser: true,useUnifiedTopology: true});


const contactSchema = new mongoose.Schema({
    Name: String,
    Phone: String,
    Email: String,
    Gender: String,
    Location: String,
  });

const contact = mongoose.model('contact', contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{

    res.status(200).render('Home.pug');
})
// ENDPOINTS
app.get('/contact', (req, res)=>{

    res.status(200).render('Contact.pug');
})

app.post('/contact', (req, res)=>{
    var mydata=new contact(req.body);
    mydata.save().then(()=>{
        res.status(200).send("your data store successfuly on mongodb")
    }).catch(()=>{
        res.status(400).send("sorry, your data not yet store , try again")
    })
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});