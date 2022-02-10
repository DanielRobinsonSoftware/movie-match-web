import React, { useState } from "react";
import { PageLayout } from "./components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { callMovieMatchApi } from "./callMovieMatchApi"

function App() {
  return (
      <PageLayout>
        <AuthenticatedTemplate>
          <PopularMovies />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <p>Please sign in if you have an account, or sign up to join</p>
        </UnauthenticatedTemplate>
      </PageLayout>
  );
}

function PopularMovies() {
  const { instance, accounts } = useMsal();
  const [movieList, setMovieList] = useState(null);
  
  function RequestAccessToken() {
      const request = {
          ...loginRequest,
          account: accounts[0]
      };

      // TODO: Refactor, and call correct endpoint (staging vs production)
      instance.acquireTokenSilent(request).then((response) => {
        callMovieMatchApi(response.accessToken, "https://moviematch211027-staging.azurewebsites.net/api/v1/movies/popular")
          .then(response => setMovieList(response));
      }).catch((e) => {
          instance.acquireTokenPopup(request).then((response) => {
            callMovieMatchApi(response.accessToken, "https://moviematch211027-staging.azurewebsites.net/api/v1/movies/popular")
              .then(response => setMovieList(response));
          });
      });
  }

  return (
      <>          
          { movieList ? 
          <>
            <h1>Popular Movies</h1>
            <ul>
              { movieList.results.map(result => (
                <li key={result.id}>{result.original_title}</li>
              ))}
            </ul>
          </>
          : RequestAccessToken()
          }
      </>
  );
};

export default App;