const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    fname:String,
    lname: String,
    username:{
        type:String,
        required:true,
        unique:true
    },
    gender: String,
    age: { 
        type: Number, 
        min: 18, 
        max: 70 
    },
    occupation: String,
    password: String,
    email: { 
        type: String, 
        unique: true, 
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    mobile: Number,
    country: String,
    city: String,
    state: String
})

userSchema.virtual('trains',{
    ref:'booking',
    localField:'_id',
    foreignField:'owner'
})

userSchema.pre('save', async function(next){
    const user = this

    if(user.isModified('password')){
        var salt = bcrypt.genSaltSync(8);
        user.password = await bcrypt.hashSync(user.password, salt);
        
    }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
