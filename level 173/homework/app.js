const express = require('express');

const app = express();

app.use((req, res, next) => {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        req.body = JSON.parse(body);
        next();
    });
});

const checkAdmin = (req, res, next) => {
    const {email} = req.body;

   if(email === 'Admin@gmail.com' ){
         next();
   }else{
        res.status(403).send('You are not allowed to view this content because you are not an Admin');
   }
};


app.post('/admin', checkAdmin, (req,res) => {
    res.send('Admin has private messages')
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})