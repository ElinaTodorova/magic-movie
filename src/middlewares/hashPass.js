const bcrypt = require("bcrypt");

const hashPass = async (req, res, next) => {
    const userPassword = req.body.password;

    const hash = await bcrypt.hash(userPassword, 13);

    req.body.password = hash;

    next();
}

module.exports = {hashPass}