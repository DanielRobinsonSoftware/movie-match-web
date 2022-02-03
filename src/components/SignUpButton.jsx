import React from "react";
import { useMsal } from "@azure/msal-react";
import { signUpRequest } from "../authConfig";
import Button from "react-bootstrap/Button";

function handleSignUp(instance) {
    instance.loginPopup(signUpRequest).catch(e => {
        console.error(e);
    });
}

export const SignUpButton = () => {
    const { instance } = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleSignUp(instance)}>Sign up</Button>
    );
}