const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello GET from Express on AWS Lambda!' });
});

app.get('/getenv', (req, res) => {
    res.json({ message: process.env.MY_CUSTOM_ENV });
  });

app.post('/post', (req, res) => {
    res.json({ message: 'Hello POST from Express on AWS Lambda! ' + req.body });
});

module.exports.handler = serverless(app);