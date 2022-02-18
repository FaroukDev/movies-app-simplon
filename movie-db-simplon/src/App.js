import React, { useEffect, useState } from "react";
import axios from 'axios';
import Movie from './components/Movie'


const FEATURE_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`;


const IMG_API = "https://image.tmdb.org/t/p/w1280";


const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}query=`;

function App() {

  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(FEATURE_API);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [FEATURE_API]);

  console.log(movies);

  return (
    <div> 
      {movies?.map((movie) => (
      <div>
        <li key={movie}>{movie.id}</li>
        <p>{movie.overview}</p>
      </div>
      
      ))}
      
    </div>
  )
  
}

export default App;
