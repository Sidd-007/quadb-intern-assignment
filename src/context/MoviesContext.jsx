import React, { createContext, useState, useEffect } from 'react';
import { searchAllGet } from '../config'

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {

    const [doneFetchPopularMovies, setdoneFetchPopularMovies] = useState(false);
    const [popularMovies, setPopularMovies] = useState([]);



    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const response = await fetch(searchAllGet())
                const data = await response.json()

                setdoneFetchPopularMovies(true);
                setPopularMovies(data)
                // console.log(data)

            } catch (error) {
                console.log(error)
            }
        }

        getPopularMovies()
    }, [])

    return (
        <MoviesContext.Provider value={{ doneFetchPopularMovies,popularMovies }}>
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesContextProvider;