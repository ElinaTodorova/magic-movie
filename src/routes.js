const router = require("express").Router();

const homeController = require("./controllers/homeController.js");
const movieController = require("./controllers/movieController.js");
const castController = require("./controllers/castControlles.js");

router.use(homeController);
router.use(movieController);
router.use(castController);

router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;