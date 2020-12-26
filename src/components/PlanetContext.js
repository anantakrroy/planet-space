import React, { useState, useEffect, createContext } from 'react';

export const PlanetContext = createContext();

export const PlanetProvider = (props) => {

    const [planets, setPlanets] = useState([]);
    const [favPlanets, setFavs] = useState([]);
    const [url, setUrl] = useState("https://assignment-machstatz.herokuapp.com/planet");

    useEffect(() => {
        const getPlanets = async () => {
            const response = await fetch(url);
            const jsonres = await response.json();
            setPlanets([...jsonres]);
        };
        getPlanets();
    }, [url])

    return (
        <PlanetContext.Provider value={[planets, favPlanets, setFavs]}>
            {props.children}
        </PlanetContext.Provider>
    );
}