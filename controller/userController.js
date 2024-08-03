// const User = require("../model/userModel");
// const Product = require("../model/productModel");
// const Wishlist = require("../model/wishlistModel");
// const Categroy = require("../model/categoryModel");
// const Order = require("../model/orderModel");
// const Address = require("../model/userAddressModel");
// const Wallet = require("../model/walletModel");
// const Cart = require("../model/cartModel");
// const Coupon = require("../model/couponModel");
// const bcrypt = require("bcrypt");
// const nodemailer = require("nodemailer");
// const randomString = require("randomstring");
// const config = require("../config/config");
// const generateOtp = require("otp-generator");
const mongoose = require("mongoose");

//================home===========

const home = async(req,res)=>{
    try{
        console.log("Home entered")
        res.render("home")
    }catch(error){
        console.log(error)
    }
}

//================shop===========

const shop = async (req,res)=>{
    try{
       res.render('shop')
    }catch(error){
        console.log(error)
    }
}

//================about===========

const about = async (req,res)=>{
    try{
       res.render('about')
    }catch(error){
        console.log(error)
    }
}

//================shop===========

const contact = async (req,res)=>{
    try{
       res.render('contact')
    }catch(error){
        console.log(error)
    }
}

//================productDetail===========

const productDetail = async (req,res)=>{
    try{
       res.render('productDetail')
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    home, 
    shop,
    about,
    contact,
    productDetail


}