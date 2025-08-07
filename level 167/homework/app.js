const express = require('express');

const app = express();

app.get('/cars', (req, res) => {
    res.json([
        {
            name: 'Ferrari',
            year: '2020',
            gasoline: '20L'
        },
        {
            name: 'BMW',
            year: '2025',
            gasoline: '20L'
        }
    ]);
});

app.listen(3000, () => {
    console.log('Server Running!');
});
