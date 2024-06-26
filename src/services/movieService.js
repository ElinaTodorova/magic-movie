const Movie = require("../models/Movie.js");
const Cast = require("../models/Cast.js");

const getAllMovies = () => {
    return Movie.find();
};

const createMovie = (movie) => {
    return Movie.create(movie)
};

const getOneMovie = (movieId) => {
    const movie = Movie.findById(movieId).populate('casts');

    return movie;
};

const getMovieByCriteres = (title, genre, year) => {
    let query = {};

    if(title) {
        query.title = new RegExp(title, 'i');    
    }

    if(genre) {
        query.genre = new RegExp(genre, 'i');
    }

    if(year) {
        query.year = year;
    }


    return Movie.find(query);
};

const attach = async (movieId, castId) => {
    return Movie.findByIdAndUpdate(movieId, {$push: {casts : castId}});
}
module.exports = {
    getAllMovies,
    createMovie,
    getOneMovie, 
    getMovieByCriteres,
    attach
}