const router = require("express").Router();
const { hashPass } = require("../middlewares/hashPass.js");
const userServices = require("../services/userService.js");

router.get('/login', (req, res) => {
  res.render('user/login');
});

router.post('/login', async (req, res) => {
  const {email, password} = req.body;

  try {
    const token = await userServices.login(email, password);
    res.cookie('auth', token);

    res.redirect('/');
  }catch (err) {
    res.redirect('/auth/login');
    console.error('Invalid token')
  }
});

router.get('/register', (req, res) => {
  res.render('user/register');
});

router.post('/register', hashPass, async (req, res) => {
    const userData = req.body;

    try {
      userServices.register(userData);

      res.redirect('/auth/login')
    }catch(err){
      res.redirect('/auth/register');
      console.error(err)
    }
  
});

router.get('/logout', (req, res) => {
  res.clearCookie('auth');

  res.redirect('/');
});

module.exports = router;
