import React, { useState, useEffect } from "react";
import getMovieMatchData from "../movieMatchApiClient";
import { Movie } from "../dao/movie";
import { MoviesResponse } from "../dao/moviesResponse";
import { useMsal } from "@azure/msal-react";
import { getAccessToken } from "../getAccessToken"

export const PopularMovies = () => {
  const popularMoviesUrl = "/v1/movies/popular";
  const [movieList, setMovieList] = useState<Movie[]>();
  const msalContext = useMsal();
  const [error, setError] = useState<string>();

  useEffect(() => {
    (async () => {
      
      const accessTokenResponse = await getAccessToken(msalContext);

      if (accessTokenResponse.error){
        const error = accessTokenResponse.error;
        console.log(error);
        setError(error);
        return;
      }

      const moviesResponse = await getMovieMatchData<MoviesResponse>(popularMoviesUrl, accessTokenResponse.accessToken);

      if (moviesResponse.data == null) {
        const error = "Could not obtain movie data";
        console.log(error);
        setError(error);
        return;
      }

      setMovieList(moviesResponse.data.results);

    })();
  
    return () => {};
  }, [msalContext]);

  return (
    <>    
        {
        <>
          <h1>Popular Movies</h1>
          {error && 
            <p>Could not load movies, please try again.</p>
          }
          {movieList == null &&
            <p>Loading data...</p>
          }          
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

