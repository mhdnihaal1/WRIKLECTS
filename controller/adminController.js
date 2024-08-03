const mongoose = require("mongoose");



const dashboard = async (req,res)=>{
  try{
   res.render('dashboard')
  }catch(error){
    console.log(error)
  }
}

const userDetails =async(req,res)=>{
    try{
      res.render('userDetails')
    }catch(bug){
        console.log(bug)
    }
}

const productDetails =async(req,res)=>{
  try{
    res.render('productDetails')
  }catch(bug){
      console.log(bug)
  }
}


module.exports = {
   dashboard,
   userDetails,
   productDetails


}