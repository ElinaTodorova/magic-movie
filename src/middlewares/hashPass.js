const bcrypt = require("bcrypt");

const hashPass = async (req, res, next) => {
    const {password, rePassword} = req.body;

    if(password !== rePassword) {
        throw new Error('Two password doenst match!')
    }

    const hash = await bcrypt.hash(password, 13);

    req.body.password = hash;

    next();
}

module.exports = {hashPass}