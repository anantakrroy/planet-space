import React, { useContext } from 'react';
import Planet from './Planet';
import { PlanetContext } from './PlanetContext';

function FavoriteList() {
    const [planets, favPlanets, setFavs] = useContext(PlanetContext);
    console.log("Favorite list >> ", favPlanets);
    return (
        <div className="App">
            {favPlanets.length === 0 ?
                <div className="loading">
                    <h2>No favorite planets selected</h2>
                </div> :
                <ul className="favList">
                    {favPlanets.map((planet) => (
                        <Planet planet={planet} favPlanets={favPlanets} key={planet.id}/>
                    ))}
                </ul>}
        </div>
    )
}

export default FavoriteList;