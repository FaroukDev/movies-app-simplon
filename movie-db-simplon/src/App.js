import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./components/Movie";
import SearchBar from "./components/SearchBar";

const FEATURE_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(FEATURE_API);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, []);

  console.log(movies);

  return (
    <div>
      <SearchBar />
      <div className="movie-container">
        {movies?.map((movie) => (
          <div key={movie.id}>
            <Movie  {...movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
