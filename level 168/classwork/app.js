/* 
const express = require('express')

const app = express();

const cars = [
  {
    "id": 1,
    "make": "Toyota",
    "model": "Camry",
    "year": 2022,
    "color": "Silver",
    "price": 27000,
    "mileage": 15000,
    "fuel_type": "Gasoline"
  },
  {
    "id": 2,
    "make": "Honda",
    "model": "Civic",
    "year": 2021,
    "color": "Blue",
    "price": 23000,
    "mileage": 20000,
    "fuel_type": "Gasoline"
  },
  {
    "id": 3,
    "make": "Tesla",
    "model": "Model 3",
    "year": 2023,
    "color": "White",
    "price": 42000,
    "mileage": 5000,
    "fuel_type": "Electric"
  },
  {
    "id": 4,
    "make": "Ford",
    "model": "F-150",
    "year": 2020,
    "color": "Black",
    "price": 35000,
    "mileage": 30000,
    "fuel_type": "Gasoline"
  },
  {
    "id": 5,
    "make": "BMW",
    "model": "X5",
    "year": 2022,
    "color": "Gray",
    "price": 60000,
    "mileage": 10000,
    "fuel_type": "Diesel"
  }
]

app.get('/cars',(req,res) => {
    res.json(cars)
});


app.get('/cars/:id',(req,res) => {
    const id = Number(req.params.id)
    const findCar = cars.find(c => c.id === id)
    res.send(findCar)
})

app.delete('/cars',(req,res) => {
    
})



app.listen(3000,() => {
    console.log('Server Running!')
})

*/



const express = require('express');

const app = express();

const cars = [
  { id: 1, brand: 'Toyota', model: 'Corolla' },
  { id: 2, brand: 'Honda', model: 'Civic' },
  { id: 3, brand: 'Ford', model: 'Mustang' },
  { id: 4, brand: 'Chevrolet', model: 'Camaro' },
  { id: 5, brand: 'Tesla', model: 'Model 3' }
];

app.get('/cars', (req, res) => {
    res.json(cars);
});

app.get('/cars/:id', (req, res) => {
    const { id } = req.params;
    const car = cars.find(obj => obj.id === parseInt(id));

    if(!car) {
        return res.status(404).json({
            status: "Fail",
            message: "Car not found!"
        });
    }

    res.json(car);
});

app.delete('/cars/:id', (req, res) => {
    const { id } = req.params;
    const index = cars.findIndex(car => car.id === parseInt(id));
    cars.splice(index, 1);
    
    res.status(204).send();
});

app.post('/cars', express.json(), (req, res) => {
    const { brand, model } = req.body;

    const car = {
        brand,
        model,
        id: cars[cars.length - 1].id + 1
    }

    cars.push(car);

    res.status(201).json(car)
});

app.listen(3000, () => {
    console.log('Server is runing on port 3000');
});