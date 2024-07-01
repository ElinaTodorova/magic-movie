const Cast = require("../models/Cast.js");

const getAll = () => {
    return Cast.find();
};

const createCast = (cast) => {
    return Cast.create(cast);
}

module.exports = {
    getAll, 
    createCast
}