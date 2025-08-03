const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    const method = req.method;

    if (pathName === '/cars' && method === 'GET') {
        fs.readFile('cars.json', 'utf-8', (err, data) => {
            if (err) {
                console.log('There was an error reading the file:', err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(err);
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
