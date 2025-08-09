/*const express = require('express');

const app = express();

const tours = [];

// Tour consists id, name, price, duration

// Route to get all tours
app.get('/tours', (req, res) => {
    res.json(tours);
});

// Route to get tour by id
app.get('/tours/:id', (req, res) => {
    const { id } = req.params;
    const tour = tours.find(elem => elem.id === parseInt(id));

    if(!tour) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Tour not found'
        })
    }

    res.json(tour);
});

// Route to add new tour
app.post('/tours', express.json(), (req, res) => {
    const { name, price, duration } = req.body;

    if(!name || !price || !duration) {
        return res.status(400).json({
            status: 'Fail',
            message: 'All fields required: name, price and duration'
        })
    }

    const newTour = {
        name,
        price,
        duration,
        id: Date.now()
    }

    tours.push(newTour);

    res.status(201).json(newTour);
});

// Route to update partially tour
app.patch('/tours/:id', express.json(), (req, res) => {
    const { id } = req.params;
    const { name, price, duration } = req.body;

    const index = tours.findIndex(elem => elem.id === parseInt(id));

    if(index === -1) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Tour not found'
        });
    }

    // Update only provided fields
    if (name !== undefined) tours[index].name = name;
    if (price !== undefined) tours[index].price = price;
    if (duration !== undefined) tours[index].duration = duration;

    res.json(tours[index]);
})

// Route to delet tour
app.delete('/tours/:id', (req, res) => {
    const { id } = req.params;

    const index = tours.findIndex(tour => tour.id === parseInt(id));

    if(index === -1) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Tour not found'
        });
    }

    tours.splice(index, 1);

    res.status(204).json();
});


app.listen(3000, () => {
    console.log('Server is runing on port 3000');
});``` */






const express = require('express');
const app = express();

let products = [
  { "id": 1, "name": "Product A", "price": 19.99, "time": "2025-08-08T10:15:00Z" },
  { "id": 2, "name": "Product B", "price": 5.49, "time": "2025-08-07T14:30:00Z" },
  { "id": 3, "name": "Product C", "price": 12.00, "time": "2025-08-06T08:45:00Z" },
  { "id": 4, "name": "Product D", "price": 25.75, "time": "2025-08-05T19:20:00Z" },
  { "id": 5, "name": "Product E", "price": 8.99, "time": "2025-08-04T12:00:00Z" }
];

app.get('/products', (req, res) => {
    const sort = req.query.sort;
    const limit = parseInt(req.query.limit); 

    let sortedProduct = [...products];

    if (sort === 'price') {
        sortedProduct.sort((a, b) => a.price - b.price);
    } else if (sort === '-price') {
        sortedProduct.sort((a, b) => b.price - a.price);
    }

    if (!isNaN(limit) && limit > 0) {
        sortedProduct = sortedProduct.slice(0, limit);
    }

    res.json(sortedProduct);
});

app.listen(3000, () => {
    console.log('Server Running!!');
});
