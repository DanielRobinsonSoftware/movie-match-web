import React from "react";
import { useMsal } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";

function handleLogin(instance: IPublicClientApplication) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

export const SignInButton = () => {
    const { instance } = useMsal();
    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>
            Sign in
        </Button>
    );
};
