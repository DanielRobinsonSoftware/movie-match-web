import React from "react";
import { PageLayout } from "./layout/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { PopularMovies } from './PopularMovies'

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

export default App;
