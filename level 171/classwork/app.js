const express = require('express');

// Routers
const toursRouter = require('./tours.router.js');
const userRouter = require('./userRouter.js');

const app = express();
app.use(express.json());

// Mount routers
app.use('/tours', toursRouter);
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
