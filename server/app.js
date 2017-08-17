// import files and packages up here
var express = require('express');
var data = require('./data.json');
var morgan = require('morgan')

// create your express server below
var app = express();

// add your routes and middleware below
app.listen(3000, () => {
    console.log("Listening at localhost:3000");
});

app.get('/', (req, res) => {
    res.status(200).send('Routing the Top Spots page');
    morgan(':method :url :status :response-time ms - :res[content-length]');

});

app.get('/data', (req, res) => {
    res.status(200).send(data);
    morgan(':method :url :status :response-time ms - :res[content-length]');
});


// finally export the express application
module.exports = app;
