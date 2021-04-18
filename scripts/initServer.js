// This file is used for initialising the server.

// informs the user that the server is starting
console.log("starting server")
// require express package
const express = require('express');
// init new express app
const app = express();
// send home.html file
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/pages/home.html`);
});
// send config.html file
app.get('/config', (req, res) => {
  res.sendFile(`${__dirname}/pages/config.html`);
});
// send feedback
app.get('/feedback', (req, res) => {
  res.sendFile(`${__dirname}/pages/feedback.html`);
});
// serves express app on port 3000
app.listen(3000, () => {
  console.log("server started on port 3000");
});
