/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import { movieDetailsGet } from './../config';

export const MovieDetailsContext = createContext();

const MovieDetailsContextProvider = ({ children }) => {

    const movie_id = window.location.pathname.split('/')[3];

    const [doneFetchmovieDetails, setdoneFetchmovieDetails] = useState(false);
    const [movieDetails, setmovieDetails] = useState();


    useEffect(() => {
        const getmovieDetails = async () => {
            try {
                const response = await fetch(movieDetailsGet(movie_id))
                const data = await response.json()

                setdoneFetchmovieDetails(true);
                setmovieDetails(data)
                // console.log(data);

            } catch (error) {
                console.log(error)
            }
        }

        getmovieDetails()
    }, [])

    return (
        <MovieDetailsContext.Provider value={{ doneFetchmovieDetails, movieDetails }}>
            {children}
        </MovieDetailsContext.Provider>
    )
}

export default MovieDetailsContextProvider;