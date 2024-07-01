const router = require("express").Router();
const movieService = require("../services/movieService.js");

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    let newMovie = req.body;

    await movieService.createMovie(newMovie);

    res.redirect('/');
});

router.get('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    const movie = movieService.getOneMovie(movieId);
    movie.rating = new Array(Number(movie.rating)).fill(true)

    res.render('details', {movie})
});

router.get('/search', (req, res) => {
    const {title, genre, year} = req.query;
   
    let movies = movieService.getMovieByCriteres(title, genre, year);

    res.render('search', {movies})
})

module.exports = router;