const router = require("express").Router();
const movieService = require("../services/movieService.js");
const castService = require("../services/castService.js");

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
});

router.get('/movies/:movieId/attach', async (req, res) => {
    const movie = await movieService.getOneMovie(req.params.movieId).lean();
    const casts = await castService.getAll().lean();

    res.render('cast/attach', {movie, casts})
});

router.post('/movies/:movieId/attach', async (req, res) => {
    const castId = req.body.cast;
    const movieId = req.params.movieId;

    await movieService.attach(movieId, castId);

    res.redirect(`/movies/${movieId}/attach`)
})

module.exports = router;