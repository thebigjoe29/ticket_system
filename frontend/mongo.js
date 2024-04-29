const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/mern-project")
.then(()=>{
    console.log('connected')
})


const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=mongoose.model('collection',newSchema)

module.exports=collection