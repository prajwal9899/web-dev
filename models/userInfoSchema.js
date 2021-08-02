const mongoose = require('mongoose')
const validator = require('validator')

const userInfoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error ("invalid email")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        minLength:10
    },
    message:{
        type:String,
        required:true,
        minLength:3

    },
    date:{
        type:Date,
        default:Date.now
    }
})

const User = new mongoose.model('UserInfo',userInfoSchema)

module.exports = User