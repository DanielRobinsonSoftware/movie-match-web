import React from "react";
import { PageLayout } from "./components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

function App() {
  return (
      <PageLayout>
        <AuthenticatedTemplate>
            <p>You are signed in</p>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
            <p>Please sign in if you have an account, or sign up to join</p>
        </UnauthenticatedTemplate>
      </PageLayout>
  );
}

export default App;