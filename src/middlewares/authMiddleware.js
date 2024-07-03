require('dotenv').config()
const jwt = require("../lib/jwt.js");

const auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if(!token) {
        return next()
    }
    try {
        const decodedToken = await jwt.verify(token, process.env.SECRET_KEY);

        req.user = decodedToken;
        res.locals.isAuthenticated = true;
        res.locals.user = decodedToken;

        next()
    }catch {
        res.clearCookie('auth');

        res.redirect('/auth/login')
    }
};

const isAuth = (req, res, next) => {
    if(!req.user) {
        return res.redirect('/auth/login');
    }

    next();
}

module.exports = {
    auth, 
    isAuth
}
