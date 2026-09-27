const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        status: "Active",
        service: "Matrix Core Microservice",
        environment: "Containerized",
        timestamp: new Date()
    }));
});
server.listen(3000, '0.0.0.0', () => {
    console.log('Server running smoothly on port 3000');
});
