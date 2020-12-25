import React from 'react';
import Header from './Header';
import Planet from './Planet';
import PlanetList from './PlanetList';

class FavoriteList extends React.Component {
    render() {
        const favPlanets = this.props.favoritePlanets;
        console.log("Props passed ? ", favPlanets);
        return (
            <div className="App">
                {favPlanets.length === 0 ?
                    <div className="loading">
                        <h2>No favorite planets selected</h2>
                    </div> :
                    <ul className="favList">
                        {favPlanets.map((planet) => (
                            <li key={planet.toLowerCase()} className="favLiItem">
                                <div className="fav-card">
                                    {planet}
                                </div>
                            </li>
                        ))}
                    </ul>}
            </div>
        )
    }
}

export default FavoriteList;