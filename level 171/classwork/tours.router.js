const express = require('express');
const { randomUUID } = require('crypto');

const toursRouter = express.Router();
const tours = [];

// Get all tours
toursRouter.get('/', (req, res) => {
    res.json(tours);
});

// Get a tour by ID
toursRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const tour = tours.find(elem => elem.id === id);

    if (!tour) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Tour not found'
        });
    }

    res.json(tour);
});

// Create a new tour
toursRouter.post('/', (req, res) => {
    const { name, price, duration } = req.body;

    if (!name || !price || !duration) {
        return res.status(400).json({
            status: 'Fail',
            message: 'All fields required: name, price and duration'
        });
    }

    const newTour = {
        id: randomUUID(),
        name,
        price,
        duration
    };

    tours.push(newTour);
    res.status(201).json(newTour);
});

// Update a tour
toursRouter.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { name, price, duration } = req.body;

    const index = tours.findIndex(elem => elem.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Tour not found'
        });
    }

    if (name !== undefined) tours[index].name = name;
    if (price !== undefined) tours[index].price = price;
    if (duration !== undefined) tours[index].duration = duration;

    res.json(tours[index]);
});

// Delete a tour
toursRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    const tourIndex = tours.findIndex(tour => tour.id === id);

    if (tourIndex === -1) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Tour can’t be found'
        });
    }

    tours.splice(tourIndex, 1);
    res.status(204).send();
});

module.exports = toursRouter;
