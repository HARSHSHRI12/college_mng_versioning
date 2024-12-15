const express=require('express');
const router=express.Router();
const studentinfo=require('../models/student');

router.post('/',async(req,res)=>{
    try{
    const sdata=req.body;
    const newstudent=new studentinfo(sdata);
    const response=await newstudent.save();
    console.log('student info is saved...');
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal server error...'});
    }
});

router.get('/',async(req,res)=>{
    try{
     const response=await studentinfo.find();
     console.log('student info is dinded...');
     res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal server error...'});
    }
});
router.get('/:name',async(req,res)=>{
    try{
    const name=req.params.name;
    if(['harsh','anshu','suresh','mahesh','parul'].includes(name)){
        const response=await studentinfo.find({name:name});
        console.log('info is found...');
        res.status(200).json(response);
    }
    else{
        return res.status(404).json({message:'info is not find...'});
    }
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal Server error...'});
    }
});
router.patch('/:id',async(req,res)=>{
    try{
     const sdata=req.body;
     const sid=req.params.id;
     const response=await studentinfo.findByIdAndUpdate(sid,sdata,{
        new:true,
        RunValidator:true
     });
     if(!response){
        return res.status(404).json({message:'Invalid data'});
     }
     console.log('info is updated...');
     res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal server error...'});
    }
});
router.delete('/:id',async(req,res)=>{
    try{
     const sid=req.params.id;
     const response=await studentinfo.findByIdAndDelete(sid);
     if(!response){
        return res.status(404).json({Message:'Invalid data...'});
     }
     console.log('info is deleted...');
     res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal server error...'});
    }
});
//export module
module.exports=router;