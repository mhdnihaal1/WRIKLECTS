const path = require('path');
const express=require('express')
const session = require('express-session')
const app=express()
app.use(express.static(path.resolve(__dirname,'public')));
//============file upload 
// app.use('/uploads',express.static('uploads'));

// require('dotenv').config();


// const nocache = require('nocache')
// app.use(nocache())


app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true ,// Provide a value for saveUninitialized
 
}));

//----------for user routes
const userRoute = require('./route/userRoute')
app.use('/',userRoute)

//----------for admin routes
const adminRoute = require('./route/adminRoute')
app.use('/',adminRoute)

const port =5000;

app.listen(port,()=>{
console.log('server is working...')
})