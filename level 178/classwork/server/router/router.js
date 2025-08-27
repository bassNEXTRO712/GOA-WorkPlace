const express = require('express');

const user = [
    
    {
    "fullName": "Bob Smith",
    "email": "bob.smith@example.com",
    "password": "qwerty456"
    } 
    
]
const createNewUser = ((req,res) => {
    const {name,email,password} = req.body;

    const newUser = {
        id: Date.now(),
        name,
        email, 
        password
    }

    if(!name || !email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }
    user.push(newUser)
    res.status(201).json({message: "User created successfully", user: newUser});
    res.json(user)
});

const getAllUsers = ((req,res) => {
    res.status(200).json({message: "All users fetched successfully", users: userInfo});
})






module.exports = {createNewUser,getAllUsers};

