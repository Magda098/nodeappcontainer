const express=require('express');
const router =express.Router();
module.exports=router;
 //CRUD routesgallery
 //C.create
 router.post('/',(req,res)=>{
    res.send('POST');
 });

 //R.read
 router.get('/photos',(req,res)=>{
    res.send('GET');
 });

 //U.update
 router.patch('/gallery/:id',(req,res)=>{
    res.send('UPDATE');
 });

 //D.delete
 router.get('/gallery/:id',(req,res)=>{
    res.send('GET');
 });