import { useState, useEffect } from 'react';

export const useStorage = <T extends unknown>(key: string, initialState: T) => {
    let [state, setState] = useState(initialState);

    useEffect(() => {
        let existingState = localStorage.getItem(key);
        if (existingState){
            setState(JSON.parse(existingState));
        };
    }, [key]);

    return [
        state,
        (state: T) => {
            setState(state);
            localStorage.setItem(key, JSON.stringify(state));
        },
    ] as const;
};