const movieService=require('../services/movieServie')

function addNewMovie(req,res) {
    const title=req.query.title;
    const rating=req.query.rating;
    console.log(`trying to add the movie with title ${title} and rating ${rating}`);
    movieService.addNewMovie(title , rating , function(err){
        if(err){
            res.status(500).send(err.message)
        }
        else{
            res.status(200).send("adding the movie")
        }
    })
    res.status(200).send("adding the movie")
}

module.exports={
    addNewMovie
}