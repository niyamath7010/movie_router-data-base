const Movie=require('../db/models/movieModel').Movie

function addNewMovie(title,rating){
    const movie= new Movie({title:title,rating: rating , dateAdded:Date.now()})
    movie.save(function(err){
        if(err){
            console.log(`some error occors ${err}`);
        }
        else
        {
            console.log("movie inserted");
        }
    })
    console.log("after save");
}

module.exports={
    addNewMovie
}