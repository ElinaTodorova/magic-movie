const User = require("../models/User.js");
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt.js');
require('dotenv').config()


const register = async (userData) => {
    const user = await User.findOne({email : userData.email});

    if(user) {
        throw new Error('This user already exist')
    };
    return User.create(userData);
}

const login = async (email, password) => {
    const user = await User.findOne({email});

    const errorMsg = "Email or password not found!";

    if(!user) {
        throw new Error(errorMsg);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if(!isValidPassword) {
        throw new Error(errorMsg)
    }

    const authParams = {
        email : user.email,
        _id : user._id
    }
    
    const token = await jwt.sign({auth : authParams}, process.env.SECRET_KEY, {expiresIn : '2h'});

    return token;
}

module.exports = {
    register,
    login
}