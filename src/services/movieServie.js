const movieAccessor=require('../accessor/movieAccessor')

function addNewMovie(title,rating){
    movieAccessor.addNewMovie(title,rating)
}

module.exports={
    addNewMovie
}