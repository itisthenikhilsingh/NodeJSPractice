const express = require('express');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const { join } = require('path');

const app = express();

// Set view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ----------- Morgan Logging Setup -------------
const logFile = join(__dirname, 'blogchefNew.log');

// Custom format for both console and file
const customFormat = ':method - :url - :date[iso] - :response-time ms';

// Log to console
app.use(morgan(customFormat));

// Log to file (append mode)
app.use(
  morgan(customFormat, {
    stream: fs.createWriteStream(logFile, { flags: 'a' }),
  })
);
// ----------- End Morgan Logging ---------------

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.render('welcome'));

app.get('/register', (req, res) => res.render('register'));

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res
      .status(400)
      .render('register', { error: 'Please fill all fields.', form: req.body });
  }
  res.render('success', {
    title: 'Registration Successful',
    message: `Welcome, ${username}!`,
  });
});

app.get('/signin', (req, res) => res.render('signin'));

app.post('/signin', (req, res) => {
  res.render('success', {
    title: 'Signed In',
    message: 'You have signed in successfully.',
  });
});

// 404 handler
app.use((req, res) =>
  res.status(404).render('success', {
    title: 'Not Found',
    message: 'Page not found.',
  })
);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Yaatri app running at http://localhost:${PORT}`)
);
