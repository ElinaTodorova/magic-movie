const router = require("express").Router();

const homeController = require("./controllers/homeController.js");
const movieController = require("./controllers/movieController.js");
const castController = require("./controllers/castControlles.js");
const authController = require("./controllers/authControllers.js");

router.use(homeController);
router.use(movieController);
router.use('/cast', castController);
router.use('/auth', authController);

router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;