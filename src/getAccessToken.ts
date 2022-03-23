import { IMsalContext } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { AuthenticationResult } from "@azure/msal-browser";

export interface AccessTokenResponse {
    accessToken: string;
    error: string;
    isLoading: boolean;
}

export async function getAccessToken(msalContext: IMsalContext): Promise<AccessTokenResponse> {
    const { instance, accounts } = msalContext;
    const request = { ...loginRequest, account: accounts[0] };

    return instance.acquireTokenSilent(request)
    .then((authResult: AuthenticationResult) => {            
        return Promise.resolve<AccessTokenResponse>({
            error: null,
            accessToken: authResult.accessToken,
            isLoading: false
        });
    })
}
