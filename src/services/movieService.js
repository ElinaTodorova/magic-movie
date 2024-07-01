const Movie = require("../models/Movie.js");


const movies = [{
    _id: 1,
    title: 'Jungle Cuise',
    genre: 'Adventure',
    director: 'Spilberg',
    year: '2019',
    imageUrl: '/img/jungle-cruise.jpeg',
    rating: '5',
    description: 'Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.'
}];



const getAllMovies = () => {
    return Movie.find();
}

const createMovie = (movie) => {
    return Movie.create(movie)
}

const getOneMovie = (movieId) => {
    let movie = Movie.findById(movieId);

    return movie;
}

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
}
module.exports = {
    getAllMovies,
    createMovie,
    getOneMovie, 
    getMovieByCriteres
}