const router = require("express").Router();
const movieService = require("../services/movieService.js");

router.get('/create', (req, res) => {
    res.render('movie/create');
});

router.post('/create', async (req, res) => {
    let newMovie = req.body;

    await movieService.createMovie(newMovie);

    res.redirect('/');
});

router.get('/movies/:id', async (req, res) => {
    const movieId = req.params.id;
    const movie = await movieService.getOneMovie(movieId).lean();
    movie.rating = new Array(Number(movie.rating)).fill(true)

    res.render('movie/details', {movie})
});

router.get('/search', async (req, res) => {
    const {title, genre, year} = req.query;
   
    let movies = await movieService.getMovieByCriteres(title, genre, year).lean();

    res.render('movie/search', {movies})
})

module.exports = router;