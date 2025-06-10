const http = require('http');
const port = process.env.PORT || 3000;

const homepage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(to right, #667eea, #764ba2);
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .container {
      text-align: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }
    h1 {
      font-size: 3em;
      margin-bottom: 10px;
    }
    p {
      font-size: 1.2em;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hello from GitHub Action CI/CD</h1>
    <p>This page is deployed automatically using GitHub Actions!</p>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(homepage);
});

server.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
