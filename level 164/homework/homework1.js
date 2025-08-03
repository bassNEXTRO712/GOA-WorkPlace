const http = require('http');
const fs = require('fs');

const messages = [];

const server = http.createServer((req, res) => {
    const pathName = req.url;
    const method = req.method;

    if (pathName === '/message' && method === 'POST') {
        let startData = '';
  //
        req.on('data', chunk => {
            startData += chunk;
        });

        req.on('end', () => {
            try {
                const message = JSON.parse(startData);
                messages.push(message);
                console.log('Message saved:', message);

                
                fs.readFile('./index.html', 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        return res.end('Something went wrong');
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                });
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server Running at http://localhost:3000');
});
