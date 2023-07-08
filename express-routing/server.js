const express = require('express');
const app = express();

const timeChecker = (req, res, next) => {
    const currentDay = new Date().getDay();
    const currentHour = new Date().getHours();

    console.log(currentHour);
    console.log(currentDay);

    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
        next();
    } else {
        res.send('The website is only available during working hours (Monday to Friday, 9h to 17h).');
    }
}

app.use(timeChecker);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <div class="container">
          <h1>Welcome to the Home Page</h1>
        </div>
      </body>
    </html>`);
});

app.get('/services', (req, res) => {
    res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <div class="container">
          <h1>Our services</h1>
        </div>
      </body>
    </html>`);
});

app.get('/contact', (req, res) => {
    res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <div class="container">
          <h1>Contact us</h1>
        </div>
      </body>
    </html>`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});