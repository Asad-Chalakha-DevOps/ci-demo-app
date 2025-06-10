const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end("This app is running on the ec2");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

