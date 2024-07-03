const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : {
        type: String, 
        required: [true, 'Email required'],
        validate : {
            validator: function(value) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
            message : 'Please enter a valid email!'
        }
    },
    password : {
        type : String, 
        required : true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;