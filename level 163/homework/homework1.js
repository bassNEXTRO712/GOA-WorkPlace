const fs = require('fs');
const http = require('http');

const pages = ['index.html', 'info.html', 'info2.html'];

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        const randomFiles = pages[Math.floor(Math.random() * pages.length)];

        try {
            const fileContent = fs.readFileSync(randomFiles, 'utf-8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fileContent);
        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log("Server is running at port 3000");
});


//res.end nishnavs pasuxis dabrunebas requestze da is abrunebs sabooloo shedegs anu pasuxs
// respone aris pasuxi motxovnaze
// server aris brausershi gashvbebuli page computershi da is localurad eshveba anu aris mxolod shens computerze sanam mas ar gaushvbeb sajaro domaionze