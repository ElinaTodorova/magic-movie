const express = require("express");
const mongoose = require('mongoose');

const routes = require('./routes.js');
const configExpress = require("./config/configExpress.js");
const configHandlebars = require("./config/configHandlebars.js");

mongoose.connect('mongodb://127.0.0.1:27017/magic-movies')
    .then(console.log(`DB OK`));

const app = express();
const port = 5000;

configExpress(app);
configHandlebars(app);

app.use(routes)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})