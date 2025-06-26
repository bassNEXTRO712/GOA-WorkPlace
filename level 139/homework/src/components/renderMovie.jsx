import React, {useState} from "react"
import MovieInfo from "./movieInfo"
import SearchMovie from "./movieForm"

const FullMovieInfo = () => {
    const [movieData,setMovieData] = useState(null);


    const fetchData = async(title) => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=fe36b1f4&t=${encodeURIComponent(title)}`);
            const data = await response.json()
            setMovieData(data)
        }catch(error){
            console.error('Something Erorr!',error)
        }
    }

    return (
        <div>
            <h1>Movie Search</h1>
            <SearchMovie onSearch = {fetchData}  />
            <MovieInfo movie={movieData}  />
        </div>
    )
};


export default FullMovieInfo;