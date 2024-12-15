const mongoose=require('mongoose');
const mongoschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    phoneNum:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
       
    },
    password:{
        type:String,
        required:true
    }
});

const student=mongoose.model('student',mongoschema);
module.exports=student;