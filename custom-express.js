const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use("/static", express.static('node_modules/bootstrap/dist'));

app.get("/", function (request, response) {
  response.render('home');
});

require('./routes/produtos')(app);

module.exports = app;