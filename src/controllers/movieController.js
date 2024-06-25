const router = require("express").Router();
const movieService = require("../services/movieService.js")
router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    let newMovie = req.body;

    movieService.createMovie(newMovie);

    res.redirect('/');
})

module.exports = router;