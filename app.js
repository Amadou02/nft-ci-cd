const express = require('express');
const path = require('path');
const app = express();

// configuration moteur de template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.render('home/index');
});

module.exports = app;
