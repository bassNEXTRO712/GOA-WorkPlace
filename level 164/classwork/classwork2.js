const fs = require('fs');
const http = require('http');

let cars = [];

const server = http.createServer((req, res) => {
    const pathName = req.url;
    const method = req.method;

    let data = '';

    req.on('data', (chunk) => {
        data += chunk;
    });

    req.on('end', () => {
        if (pathName === '/cars' && method === 'POST') {
            try {
                const body = JSON.parse(data);
                cars.push(body);

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    message: 'Data received successfully',
                    received: body
                }));
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error JSON' }));
            }
        } else {
           
            res.end('Not Found');
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
