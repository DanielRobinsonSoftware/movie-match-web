import React, { useState, useEffect } from "react";
import getMovieMatchData from "../movieMatchApiClient";
import { Movie } from "../dao/movie";
import { MoviesResponse } from "../dao/moviesResponse";
import { useMsal } from "@azure/msal-react";

export const PopularMovies = () => {
  const popularMoviesUrl = "/v1/movies/popular";
  const [movieList, setMovieList] = useState<Movie[]>();
  const msalContext = useMsal();

  useEffect(() => {
    (async () => {
      const moviesResponse = await getMovieMatchData<MoviesResponse>(popularMoviesUrl, msalContext);
      setMovieList(moviesResponse.data.results);
    })();
  
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  return (
    <>    
        {
        <>
          <h1>Popular Movies</h1>
          {movieList && 
            <ul>
              {movieList.map((movie: Movie) => <li key={movie.id}>{movie.original_title}</li>)}
            </ul>
          }
        </>
        }
    </>
  );
}

