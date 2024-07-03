const router = require("express").Router();
const movieService = require("../services/movieService.js");
const castService = require("../services/castService.js");
const {isAuth} = require("../middlewares/authMiddleware.js"); 


router.get('/create', isAuth, async (req, res) => {
    res.render('movie/create');
});

router.post('/create', isAuth, async (req, res) => {
    const  movieData = req.body;
    const userId = req.user._id;
    
    await movieService.createMovie(movieData, userId);

    res.redirect('/');
});

router.get('/movies/:id', async (req, res) => {
    const movieId = req.params.id;
    const movie = await movieService.getOneMovie(movieId).lean();

    const isOwner = movie.owner == req?.user._id

    movie.rating = new Array(Number(movie.rating)).fill(true)

    res.render('movie/details', {movie, isOwner})
});

router.get('/search', async (req, res) => {
    const {title, genre, year} = req.query;
   
    let movies = await movieService.getMovieByCriteres(title, genre, year).lean();

    res.render('movie/search', {movies})
});

router.get('/movies/:movieId/attach', isAuth, async (req, res) => {
    const movieId = req.params.movieId
    const movie = await movieService.getOneMovie(movieId).lean();
    const casts = await castService.getAvailableCasts(movieId)

    res.render('cast/attach', {movie, casts})
});

router.post('/movies/:movieId/attach',isAuth, async (req, res) => {
    const castId = req.body.cast;
    const movieId = req.params.movieId;

    await movieService.attach(movieId, castId);

    res.redirect(`/movies/${movieId}/attach`)
});

router.get('/movies/:movieId/edit', isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOneMovie(movieId).lean();

    res.render('movie/edit', {movie});
});

router.post('/movies/:movieId/edit', isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const movieData = req.body;

    await movieService.edit(movieId, movieData);

    res.redirect(`/movies/${movieId}`)
});

router.get('/movies/:movieId/delete', isAuth, async (req, res) => {
    const movieId = req.params.movieId;

    await movieService.deleteMovie(movieId);

    res.redirect('/');
});

module.exports = router;