const express = require('express');
const app = express();

const timeChecker = (req, res, next) => {
    const currentDay = new Date().getDay();
    const currentHour = new Date().getHours();

    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
        next();
    } else {
        res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body>
        <main className="relative isolate min-h-full">
        <img
          src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">We are closed</h1>
          <p className="mt-4 text-base text-white/70 sm:mt-6">The website is only available during working hours (Monday to Friday, 9h to 17h).</p>
          <div className="mt-10 flex justify-center">
            <a href="/" className="text-sm font-semibold leading-7 text-white">
              <span aria-hidden="true">&larr;</span> Retry again by going back to home?
            </a>
          </div>
        </div>
      </main>
      </body>
    </html>`);
    }
}

app.use(timeChecker);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/styles.css">
        <script src="https://cdn.tailwindcss.com"></script>
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
        <script src="https://cdn.tailwindcss.com"></script>
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
        <script src="https://cdn.tailwindcss.com"></script>
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