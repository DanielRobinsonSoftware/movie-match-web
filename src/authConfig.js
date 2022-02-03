// clientId and authority are not secrets, but I would prefer not to have them in git history
export const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID, 
    authority: "https://login.microsoftonline.com/" + process.env.REACT_APP_AZURE_AD_TENANT_ID,
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
// TODO: Set nonce
export const loginRequest = {
 scopes: ["User.Read"],
};

export const signUpRequest = {
  prompt: 'create'
};

