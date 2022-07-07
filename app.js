const express=require('express');
const { default: mongoose } = require('mongoose');
const app=express();

const homeRoute=require('./routes/home');
const postsRoute=require('./routes/posts');
const bodyParser=require('body-parser');
const { json } = require('body-parser');

app.use(bodyParser.json());

app.use('/',homeRoute);
app.use('/posts',postsRoute);


mongoose.connect('mongodb+srv://rajat:rajatforba@cluster0.elvey.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log('Connected to DB!');
})


app.listen(3000);