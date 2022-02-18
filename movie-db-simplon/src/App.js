import React from "react";
import Movie from './components/Movie'


const FEATURE = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e59edc16a39691eaa185d6b7049ca9d4"





function App() {

  const movies = ['1','2','3']
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
