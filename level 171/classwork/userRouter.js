const express = require('express');

const userRouter = express.Router();
const users = [];

// Register a user
userRouter.post('/register', (req, res) => {
    const { email, password, fullname } = req.body;
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        return res.status(400).json({
            status: 'Fail',
            message: 'User already exists!'
        });
    }

    const user = {
        email,
        password, // ⚠️ Demo only! Store hashed in real apps.
        fullname,
        id: Date.now().toString()
    };

    users.push(user);

    res.status(201).json({
        email: user.email,
        fullname: user.fullname,
        id: user.id
    });
});

// Login
userRouter.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(obj => obj.email === email && obj.password === password);

    if (!user) {
        return res.status(404).json({
            status: 'Fail',
            message: 'User can’t be found or password is incorrect!'
        });
    }

    res.json({
        email: user.email,
        fullname: user.fullname,
        id: user.id
    });
});

// Get all users
userRouter.get('/', (req, res) => {
    res.json(users.map(user => ({ ...user, password: null })));
});

// Get user by ID
userRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(obj => obj.id === id);

    if (!user) {
        return res.status(404).json({
            status: 'Fail',
            message: 'User can’t be found!'
        });
    }

    res.json({
        email: user.email,
        fullname: user.fullname,
        id: user.id
    });
});

module.exports = userRouter;
