const http = require("http");
const fs = require("fs");

const homeHtml = fs.readFileSync('./index.html', 'utf-8');

const server = http.createServer((req, res) => {
    // res - response - პასუხს (ეს არის ობიექტი)
    // req - request - მოთხოვნას (ეს არის ობიექტი)

    if(req.url === '/' || req.url === '/home') {
        res.end(homeHtml);
    } else {
        res.end('<h1>404 Not Found</h1>')
    }
});

server.listen(3000, () => {
    console.log("Server is runnig at port 3000")
})