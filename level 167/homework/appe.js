const express = require('express')

const app = express();

app.get('/map',(req,res) => {
    res.json([
        
  {
    "name": "Bali, Indonesia",
    "price": 950,
    "weekend_days": 3
  },
  {
    "name": "Rome, Italy",
    "price": 1200,
    "weekend_days": 4
  },
  {
    "name": "Cape Town, South Africa",
    "price": 1100,
    "weekend_days": 3
  },
  {
    "name": "Tokyo, Japan",
    "price": 1500,
    "weekend_days": 4
  },
  {
    "name": "Santorini, Greece",
    "price": 1000,
    "weekend_days": 3
  }
]

    )
})

app.listen(3000,() => {
    console.log('Server Has Starting Working!!')
})