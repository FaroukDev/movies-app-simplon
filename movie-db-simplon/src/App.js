import React, { useEffect, useState } from "react";
import Movie from './components/Movie'


const FEATURE_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`;


const IMG_API = "https://image.tmdb.org/t/p/w1280";


const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=e59edc16a39691eaa185d6b7049ca9d4&query=";

function App() {

  const [ movies, setMovies ] = useState([])
  return (
    <div className="App">
      <header >
       {movies.map(movie =>(
         <Movie/>
       ))} 
        
      </header>
    </div>
  );
}

export default App;
