// index.js
const express = require('express');
const app = express();
const port = 5000;

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, DevOps Showcase!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
