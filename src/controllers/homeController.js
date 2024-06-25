const router = require("express").Router();
const movieService = require("../services/movieService.js")

router.get('/', (req, res) => {
    const allMovies = movieService.getAllMovies();
    res.render('home', {movies: allMovies})
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.get('/404', (req, res) => {
    res.render('404');
})

module.exports = router;