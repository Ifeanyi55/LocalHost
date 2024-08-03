const { createServer } = require("node:http");
const fs  = require("node:fs");

const hostname = "127.0.0.1";
const port = 4000;

const server = createServer((req, res) => {
    fs.readFile("index.html", function(err, data) { // read file
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(data);
        return res.end();
})});

server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
});