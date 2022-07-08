const http = require('http');
const server = http.createServer((Request, Response) => {
    Response.end('Hey! This is your server response!');
});
server.listen(3000);