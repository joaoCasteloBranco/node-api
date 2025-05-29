const app = require("../src/app");
const http = require('http');


const PORT = process.env.PORT || 3000;


app.set('port', PORT)

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening at: ${PORT}`)
});