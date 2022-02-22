const mongoose=require('mongoose')

const movieSchema=require('../schema/movieSchema').movieSchema

const Movie=mongoose.model('Movie',movieSchema)

module.exports={
    Movie
}