const express = require('express');
const mongoose = require('mongoose');
const { getAllUsers } = require('./router');

const TravelRouter = express.Router();

TravelRouter.get("/", getAllUsers)




module.exports = TravelRouter;