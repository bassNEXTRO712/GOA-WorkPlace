const express = require('express');
const postRouter = require('./postRouter');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the postRouter on /posts
app.use('/posts', postRouter);

app.listen(3000, () => {
    console.log('Server running at port 3000!');
});
