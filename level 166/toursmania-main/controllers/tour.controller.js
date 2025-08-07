const url = require("url");

const { readFile } = require("../utils/dataMethods.js");

const getTours = (req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(readFile('./data/tours.json'))
}

const getTour = (req, res) => {
    const urlParts = url.parse(req.url, true);
    const tourId = parseInt(urlParts.query.id);
    const tours = JSON.parse(readFile('./data/tours.json'));
    const tour = tours.find(t => t.id === tourId);

    if (!tour) {
        res.writeHead(404, { "content-type": "application/json" });
        return res.end(JSON.stringify({ message: "Tour not found" }));
    }

    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify(tour))
}



module.exports = {
    getTours,
    getTour
}