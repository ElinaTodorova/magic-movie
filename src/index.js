require('dotenv').config()

const express = require("express");
const mongoose = require('mongoose');

const routes = require('./routes.js');
const configExpress = require("./config/configExpress.js");
const configHandlebars = require("./config/configHandlebars.js");

mongoose.connect(process.env.CONNEXION_MONGODB)
    .then(console.log(`DB OK`));

const app = express();
const port = 5000;

configExpress(app);
configHandlebars(app);

app.use(routes)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})