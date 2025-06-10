const http = require('http');
const port = process.env.PORT || 3000;

const renderPage = (title, heading, message) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
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
    nav a {
      color: #fff;
      text-decoration: none;
      margin: 0 15px;
      font-weight: bold;
    }
    nav {
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
    <h1>${heading}</h1>
    <p>${message}</p>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.url === '/') {
    res.end(renderPage('Home', 'Welcome!', 'This is the home page served by GitHub CI/CD.'));
  } else if (req.url === '/about') {
    res.end(renderPage('About', 'About Us', 'We are learning Node.js and CI/CD.'));
  } else if (req.url === '/contact') {
    res.end(renderPage('Contact', 'Get in Touch', 'Email us at example@example.com.'));
  } else {
    res.writeHead(404);
    res.end(renderPage('404', 'Page Not Found', 'Sorry, that page does not exist.'));
  }
});

server.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});

