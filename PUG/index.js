const express = require('express');
const path = require('path');
const app = express();
const morgan = require("morgan");
const {createWriteStream} = require("fs");
const port = 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

 
const logFile = path.join(__dirname, "blogchefNew.log");   // create the log file in the current project directory
 
/*--------------Morgan module ------------------*/
app.use(morgan(":method - :url - :date - :response-time ms"));  // morgan template
app.use(
  morgan(":method -:url - :date - :response-time ms", {
    stream: createWriteStream(logFile, { flags: "a" }),
  })
);
// Set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  console.log('Registered:', { username, email, password });

  // In a real app, you'd save user here

  res.send(`
    <script>
      alert('User registered successfully!');
      window.location.href = '/';
    </script>
  `);
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
