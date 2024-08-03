const express = require('express')
const user_route = express();
const session  = require('express-session')

user_route.use(session({
  secret: "mysecret",
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false,  }
}));

// const userblockMiddle = require('../middleware/userblockMiddle')
// const userMiddle = require('../middleware/userMiddle')

user_route.set('view engine','ejs');
user_route.set('views','./views/users');

user_route.use(express.json())
user_route.use(express.urlencoded({extended:true}))
 

const userController = require ("../controller/userController")


//=============home===========

user_route.get('/',userController.home)

//=================shop============

user_route.get('/shop',userController.shop)

//=================about============

user_route.get('/about',userController.about)

//=================contact============

user_route.get('/contact',userController.contact)

//=================productDetail============

user_route.get('/productDetail',userController.productDetail)

module.exports = user_route;