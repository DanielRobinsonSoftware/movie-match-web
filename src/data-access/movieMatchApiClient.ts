import axios from "axios";

export interface MovieMatchApiResponse<T> {
    data: T;
    error: string;
}

export default async function getMovieMatchData<T>(endpoint: string, bearerToken: string){
    const baseUrl = process.env.REACT_APP_API_URL;

    const getData = (async (bearerToken: string) => {
        const bearer = `Bearer ${bearerToken}`;

        try {
            const response = await axios.get(baseUrl + endpoint, {
                headers: {
                    'Authorization': bearer
                }
            });

            const apiResponseData: MovieMatchApiResponse<T> = {
                data: response.data,
                error: null,
            };
            return apiResponseData;
        }
        catch (error) {
            const apiResponseData: MovieMatchApiResponse<T> = {
                data: null,
                error: error,
            };
            return apiResponseData;
        }

    });

    return getData(bearerToken);
}
