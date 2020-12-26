import React, { useContext } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { PlanetContext } from './PlanetContext';

function Planet(props) {
    const [planets, favPlanets, setFavs] = useContext(PlanetContext);
    const planet = props.planet;

    const updateFavorites = (p) => {
        if (favPlanets.filter(e => e.name === p.name).length === 0) {
            p.isFavourite = true;
            setFavs([...favPlanets, {name : p.name , isFavourite : true, id : p.name.toLowerCase()}]);
        } else if (favPlanets.filter(e => e.name === p.name).length !== 0){
            let idxOfPlanet = favPlanets.findIndex(e => e.name === p.name);
            planets[idxOfPlanet].isFavourite = false;
            favPlanets.splice(idxOfPlanet, 1);
            setFavs([...favPlanets]);
        }
    }

    return (
        <li>
            <div className="planet-card">
                <div className="planet-info">
                    <p>{planet.name}</p>
                </div>
                <div className="favorite-icon">
                    <span className="starIcon" onClick={() => updateFavorites(planet)}>
                        {favPlanets.findIndex(e => e.name === planet.name) !== -1 ? <FaStar /> : <FaRegStar />}
                    </span>
                </div>
            </div>
        </li>
    );
}

export default Planet