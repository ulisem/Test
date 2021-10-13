'use strict';

const express = require('express');
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

app.use( '/api', require('./routes/candidate'));

/*
app.post('/candidates', function (req, res) {
  console.log("post candidates");
  
});

app.get('/candidates/search', function (req, res) {
  console.log("get candidates");
  
});*/



app.listen(process.env.HTTP_PORT || 5000);
