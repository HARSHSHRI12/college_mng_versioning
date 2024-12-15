const express=require('express');
const bodyparser=require('body-parser');
const clgdb=require('./clgdb');

const app=express();
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.send('Welcome to college management system');
});

//import routes module
const student=require('./routes/studentRoutes');
//use
app.use('/studentinfo',student);

 app.listen(4000,()=>{
    console.log('Server is start...');
 });