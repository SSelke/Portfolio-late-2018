const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const contactRouter = require('./routes/contact');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, 'client/build')));

//route handlers

app.use('/api/contact', contactRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


module.exports = app;
