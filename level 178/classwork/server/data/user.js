const mongoose = require('mongoose')
const { type } = require('os')

const userSchema = new mongoose.Schema( {
    username: {
        type: String,
        required: true ["Username is required"],
        unique: true ["User already exists"]
    },

    email:{
        type: String,
        required: true ["Email is required"],
        unique: true ["Email already exists"]
    },

    password: {
        type: String,
        required: true ["Password is required"],

    }

    
})

const User = mongoose.model('User', userSchema)

module.exports = User;