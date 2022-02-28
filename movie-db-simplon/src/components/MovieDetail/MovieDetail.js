import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';





const MovieDetail = () => {
    const { movieId, setMovieId }  = useParams();

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`);
          setMovieId(request.data.results);
          return request;
        }
    
        fetchData();
      }, []);

      console.log(movieId);

    return (
        <div>
            Detail
            <p></p>
        </div>
    )
}

export default MovieDetail;
