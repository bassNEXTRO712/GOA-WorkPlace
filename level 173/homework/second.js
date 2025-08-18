/* const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get("/",(req,res) => {
    res.send("Welcome to the home page");
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});  */


const express = require('express');
const morgan = require('morgan');

const app = express();

// Morgan middleware, გამოტოვებს /health requests
app.use(morgan('dev', {
  skip: function (req, res) { return req.url === '/health'; }
}));

app.get("/", (req, res) => {
    res.send("Welcome to the home page");
});

app.get("/health", (req, res) => {
    res.send("OK");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
