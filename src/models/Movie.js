const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title : {
        type: String, 
        require : true,
    },
    genre : {
        type : String,
        required : true,
    },
    director : {
        type : String, 
        required : true
    },
    year : {
        type: Number,
        min : 1800,
        max : 2025
    },
    rating : {
        type: Number,
        min : 1,
        max : 5
    },
    description : {
        type : String,
        maxLength : 255
    },
    imageUrl : {
        type: String,
        required : true,
        match : /^https?/
    },
    casts : [{
        type : mongoose.Types.ObjectId,
        ref : 'Cast'
    }],
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;