const express = require('express');
const path=require('path');
const router=express.Router();
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'shop.html'));
 })
 router.use((req,res)=>{
    res.status(404).send(`
        <h1>404 - Page Not Found</h1>
        
    `);
 })
 module.exports=router;