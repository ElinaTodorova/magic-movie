const express = require("express");
const routes = require('./routes.js')

const app = express();
const port = 5000;

app.use(routes)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})