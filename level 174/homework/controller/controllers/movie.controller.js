const express = require('express');

let nextID = 1;
let movies = [{
    id:0,
    movie:'Batman',
    Time: "20.16.2005"
}
  
]
// ვიღებთ ყველა ფილმს
const getAllMovies = ((req,res) => {
     res.status(200).json({ message: "All Movies" ,movies});

});
// ვამატებთ ახალ ფილმს
const newMovies = ((req,res) => {
    const {name,time} = req.body

    if(!name || !time ){
        res.status(400).json({ message: "Name and Time are required"})
    }


    const newFilm = {
        id:nextID++,
        name,
        time
    }
    movies.push(newFilm)
    res.status(201).json({message: 'Movie Has Added On New Movies',movies})
});
//ვპოულობთ ფილმს ID-ით
const findMovie = ((req,res) => {
    const id = parseInt(req.params.id)
    const  movieID = movies.find(m => m.id ===id)

if(!movieID){
  return  res.status(404).json({message:'There Is Not Movie With That ID'})
}
res.status(200).json({message: "We Find Resulth!",movieID})
});
// ვშლით ფილმს ID-ით
const deleteMovie = ((req,res) => {
    const id = parseInt(req.params.id)

    const index = movies.findIndex(m => m.id === id)

    if(index === -1){
       return  res.status(404).json({message: "Sorry Something Wrong!"})
    }

    movies.splice(index,1)
    res.status(200).json({message: "Movie Delete Succesfull!!",movies})
});
// ვცვლით ფილმების მასივს საჭიროების შემთხვევაში
const putMovie = ((req,res) => {
    movies = req.body;
    res.status(200).json({message: "Movies Updated",movies})
});
const patchMovie= ((req,res) => {
    const id = parseInt(req.params.id)
    const movie = movies.find(m => m.id === id)

    if(!movie){
        return res.status(404).json({message: "Movie Not Found"})
    }

    
    Object.assign(movie, req.body);

    res.status(200).json({message: "Movie Updated", movie})
})








module.exports = {getAllMovies, newMovies, findMovie, deleteMovie, putMovie, patchMovie};