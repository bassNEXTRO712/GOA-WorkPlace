const { getTours, getTour } = require("../controllers/tour.controller.js");

const router = (req, res) => {
    const { url, method } = req;

    if(url === "/tours" && method === "GET") {
        return getTours(req, res);
    } else if(url.startsWith('/tour') && method === "GET") {
        return getTour(req, res);
    }
}

module.exports = router;