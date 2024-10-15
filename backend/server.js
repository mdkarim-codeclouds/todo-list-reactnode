const http = require('node:http');

const db = require("./app/models");
function initial() {
    Role.create({
        id: 1,
        name: "user"
    });
 
    Role.create({
        id: 2,
        name: "moderator"
    });
 
    Role.create({
        id: 3,
        name: "admin"
    });
}
const Role = db.role;
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});