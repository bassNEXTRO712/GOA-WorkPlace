const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const TravelRouter = require('./router/export.router');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/", TravelRouter);

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`🚀 Server is running!}`);
    });
})
.catch(err => {
    console.error("❌ Database connection failed:", err.message);
});
