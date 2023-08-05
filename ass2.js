const http = require("http");

const hostname = 'localhost';
const port = 8000;

function requestHandler(req, res){
    console.log(req)
    res.end("Hello world")
}

const server = http.createServer(requestHandler);
server.listen(port, hostname, () => {
    console.log(`Server started at https://${hostname}:${port}`)
})