const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static HTML files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Handle form submission and calculate sum
app.post('/calculate', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2;
    res.send(`<h1>Sum: ${sum}</h1>`);
  } else {
    res.send('<h1>Please enter valid numbers.</h1>');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
