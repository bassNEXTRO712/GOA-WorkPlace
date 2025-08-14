const express = require('express');
const { postRouter } = require('./postRouter');

const app = express();
app.use(express.json())

app.use(postRouter);



app.listen(3000,() => {
    console.log('Server Starting Runing!!')
})