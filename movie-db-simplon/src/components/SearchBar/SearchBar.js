import React, { useState } from "react";
import Movie from "../Movie/Movie";
import "../../assets/css/SearchBar.css";

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`;

function SearchBar() {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setMoviesSearch(data.results);
      });

      setSearchTerm('');
    }

  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(setSearchTerm(e.target.value));
  };

  return (
    <div>
      <header className="header">
        <span >The Movie DB</span>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {moviesSearch?.map((movie) => (
          <div key={movie.id}>
            <Movie key={movie.id} {...movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
