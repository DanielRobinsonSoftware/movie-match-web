import React, { useState, useEffect } from "react";
import getMovieMatchData from "./data-access/movieMatchApiClient";
import { Movie } from "./data-access/movie";
import { MoviesResponse } from "./data-access/moviesResponse";
import { useMsal } from "@azure/msal-react";
import { getAccessToken } from "./account/getAccessToken"

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

  const ErrorSection = () => <p>Could not load movies at the moment, please try again later.</p>  
  const MovieSection = () => { 
    return movieList 
      ? <ul>{movieList.map((movie: Movie) => <li key={movie.id}>{movie.original_title}</li>)}</ul>
      : <p>Loading...</p>
  }

  return (
    <>
      <h1>Popular Movies</h1>
      { error ? <ErrorSection /> : <MovieSection /> }
    </>
  );
}

