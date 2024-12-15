const mongoose=require('mongoose');
const mongourl='mongodb://localhost:27017/cllg_Mng_System';
mongoose.connect(mongourl);

//create object for bd

const clgdb=mongoose.connection;
clgdb.on('connected',()=>{
    console.log('Database connected...');
});
clgdb.on('disconnected',()=>{
    console.log('Database disconnected...');
});
clgdb.on('err',(err)=>{
    console.log(err);
});
module.exports=clgdb;
