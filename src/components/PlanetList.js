import React, { useContext } from 'react';
import Planet from './Planet';
import { PlanetContext } from './PlanetContext';

function PlanetList() {
    const [planets, favPlanets] = useContext(PlanetContext);
    
    return (
        <div className="App" >
            {planets.length === 0 ?
                <div className="loading">
                    <h2>Loading....</h2>
                </div> :
                <ul>
                    {planets.map((planet) => (
                        <Planet planet={planet} favPlanets={favPlanets} key={planet.id}/>
                    ))}
                </ul>}
        </div>
    );
}

export default PlanetList;