const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

// connect to Mongodb

mongoose.connect(process.env.MONGO_CONNECTION_URL)
    .then((result)=> app.listen(PORT,()=>{
        console.log(`listening on port ${PORT}`);
    }))
    .catch((err)=> console.log(err)); 

    // it will make sure to look for any requested files in views folder
app.set('view engine','ejs');


// middleware to serve static file (css files)
app.use(express.static('public'));
app.use(morgan('dev'));
// middleware for post request, so the data coming from submit form can be parsed into an Object 
app.use(express.urlencoded({extended:true}));
 
 
app.get('/',(req,res)=>{
    res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
});

// blogs routes 
app.use('/blogs',blogRoutes);
// 404 page
app.use((req,res)=>{
    res.status(404).render('404' ,{title:'Not Found!!!'});
});





