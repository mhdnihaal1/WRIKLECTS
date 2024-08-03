const express = require('express')
const admin_route = express();
const session  = require('express-session')

admin_route.use(session({
  secret: "mysecret",
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false,  }
}));

// const userblockMiddle = require('../middleware/userblockMiddle')
// const userMiddle = require('../middleware/userMiddle')

admin_route.set('view engine','ejs');
admin_route.set('views','./views/admin');

admin_route.use(express.json())
admin_route.use(express.urlencoded({extended:true}))
 

const adminController = require ("../controller/adminController")


//=============home===========

admin_route.get('/dashboard',adminController.dashboard)

admin_route.get('/userDetails',adminController.userDetails) 

admin_route.get('/productDetails',adminController.productDetails) 





module.exports = admin_route;