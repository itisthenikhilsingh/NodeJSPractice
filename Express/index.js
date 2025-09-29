const express = require('express'); 
const app = express(); 
const yatri = require('./yatri');

app.use(express.json()); 

const port = 3000;

app.use('/student', yatri);
app.use('/professor', yatri);
app.use('/employee', yatri);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
