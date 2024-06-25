const router = require("express").Router();
const movieService = require("../services/movieService.js");

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    let newMovie = req.body;

    movieService.createMovie(newMovie);

    res.redirect('/');
});

router.get('/movies/:id/details', (req, res) => {
    let movieId = req.params.id;
    let movie = movieService.getOneMovie(movieId);

    res.render('details', {movie})
})

module.exports = router;