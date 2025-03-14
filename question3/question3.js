const express = require('express');
const app = express();
const port = 3000;

//route
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Clyd Pardillo' });
});

//server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});