const express  = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
};


app.get('/',(req, res) => {
    res.send("Hello User");
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Server is running on port!');
})