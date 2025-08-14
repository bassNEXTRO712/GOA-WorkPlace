const express = require('express');
const app = express();

let cars = [
  {
    "id": 1,
    "name": "Tesla Model S Plaid",
    "max_speed_kmh": 322,
    "horsepower": 1020,
    "type": "Electric Sedan",
    "origin": "USA"
  },
  {
    "id": 2,
    "name": "Bugatti Chiron Super Sport",
    "max_speed_kmh": 440,
    "horsepower": 1600,
    "type": "Hypercar",
    "origin": "France"
  },
  {
    "id": 3,
    "name": "Porsche 911 GT3 RS",
    "max_speed_kmh": 296,
    "horsepower": 518,
    "type": "Sports Car",
    "origin": "Germany"
  },
  {
    "id": 4,
    "name": "Ferrari SF90 Stradale",
    "max_speed_kmh": 340,
    "horsepower": 986,
    "type": "Hybrid Supercar",
    "origin": "Italy"
  },
  {
    "id": 5,
    "name": "Lamborghini Aventador SVJ",
    "max_speed_kmh": 350,
    "horsepower": 759,
    "type": "Supercar",
    "origin": "Italy"
  }
]


app.get('/cars',(req,res) => {
    res.json(res)
})
app.listen(3000,() => {
    console.log('Server Runing!!')
})