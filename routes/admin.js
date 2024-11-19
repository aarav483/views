const express = require('express');
const router=express.Router();
router.get('/addproduct',(req,res)=>{
    res.send(`<form action='/product' method='POST'>
        <input type="text" name = "product">
        <label >size</label>
        <input type="text" name = "size" id="size">
        <button type='submit' >  Submit</button>
        </form>`)
 })
 router.use('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
 })
 module.exports=router;