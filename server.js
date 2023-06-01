const http = require('http');

const hostname = '127.0.0.1'; // = local host (domain name)
const port = 3000; //post(0-65500) except

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n dsadsa');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});