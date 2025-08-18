// express.json() გარდაქმნის JSON კოდს JavaScript ობიექტებად!

const express = require('express');
const app = express();
const fakeExpressJson = (req, res, next) => {
  if (req.headers['content-type'] === 'application/json') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        req.body = JSON.parse(body);
      } catch (e) {
        return res.status(400).send('Invalid JSON');
      }
      next();
    });
  } else {
    next(); 
  }
};


app.use(fakeExpressJson);

app.post('/user', (req, res) => {
  res.json({ received: req.body });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
