const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end("Hello from Github Action CI/CD");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

