const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/user', (req,res) => {
    res.send("Hello User")
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('Server is running!');
} );


// gitignore ს ვიყენებთ რათა თავი ავარიდოთ ჩვენი საჭირო საიდუმლო ინფორმაციის გაჟონვას
// ENV გამოიყენება გარემო ცვლადების განსაზღვრად