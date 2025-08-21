const express = require('express');
const { moviesRouter } = require('../routers/movie.router.js');



const app = express();
app.use(express.json())

app.use("/movies",moviesRouter)

app.listen(3000, () => {
    console.log('Server Is Running At Port 3000!')
})