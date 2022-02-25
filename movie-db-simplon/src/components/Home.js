import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import SearchBar from "./SearchBar";

const FEATURE_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`;

function Home() {
  const [movies, setMovies] = useState([]);

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

export default Home;

