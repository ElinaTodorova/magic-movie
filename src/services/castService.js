const Cast = require("../models/Cast.js");
const Movie = require("../models/Movie.js");

const getAll = () => {
    return Cast.find();
};

const createCast = (cast) => {
    return Cast.create(cast);
};

const getAvailableCasts = async (movieId) => {
    // Étape 1 : Récupérer la liste des IDs des acteurs dans le tableau casts du film
    const movie = await Movie.findById(movieId).select('casts');
    const castIds = movie.casts;

    // Étape 2 : Récupérer les acteurs qui ne sont pas dans cette liste
    return Cast.find({ _id: { $nin: castIds } }).lean();
};

module.exports = {
    getAll, 
    createCast,
    getAvailableCasts
}