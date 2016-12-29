const express = require('express');
const path = require('path');
const github = require('./github');

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/user', (req, res) => {
  github.user().then(user => {
    res.send(user);
  });
});

app.get('/issues', (req, res) => {
  github.searchIssues().then(user => {
    res.send(user);
  });
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
