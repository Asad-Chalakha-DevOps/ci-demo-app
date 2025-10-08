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

const futuristicContactPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Us - Futuristic</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Orbitron', sans-serif;
      background: radial-gradient(circle at 20% 20%, #0f0c29, #302b63, #24243e);
      color: #0ff;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .neon-box {
      background: rgba(255, 255, 255, 0.05);
      border: 2px solid #0ff;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 0 25px #0ff, 0 0 60px #0ff inset;
      text-align: center;
    }

    h1 {
      font-size: 3em;
      margin-bottom: 20px;
      text-shadow: 0 0 10px #0ff;
    }

    p {
      font-size: 1.2em;
      color: #a2fefa;
    }

    nav a {
      color: #0ff;
      text-decoration: none;
      margin: 0 15px;
      font-weight: bold;
      text-shadow: 0 0 8px #0ff;
    }

    nav {
      margin-bottom: 30px;
    }

    .glow-btn {
      background: transparent;
      border: 2px solid #0ff;
      padding: 10px 25px;
      color: #0ff;
      font-size: 1em;
      cursor: pointer;
      border-radius: 10px;
      margin-top: 20px;
      transition: 0.3s ease;
    }

    .glow-btn:hover {
      background-color: #0ff;
      color: #000;
      box-shadow: 0 0 15px #0ff, 0 0 30px #0ff;
    }
  </style>
</head>
<body>
  <div class="neon-box">
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
    <h1>Contact Us</h1>
    <p>Reach out via <strong>contact@futuristic.dev</strong></p>
    <button class="glow-btn">Send a Message</button>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.url === '/') {
    res.end(renderPage('Home', 'Welcome', 'A Sample static Website Hosted on EC2.'));
  } else if (req.url === '/about') {
    res.end(renderPage('About', 'About Us', 'We are learning Node.js and CI/CD.'));
  } else if (req.url === '/contact') {
    res.end(futuristicContactPage);
  } else {
    res.writeHead(404);
    res.end(renderPage('404', 'Page Not Found', 'Sorry, that page does not exist.'));
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
