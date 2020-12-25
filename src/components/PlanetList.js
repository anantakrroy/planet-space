import React from 'react';
import Planet from './Planet';
import { FaStar, FaRegStar } from "react-icons/fa";


class PlanetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            favoritePlanets: this.props.favoritePlanets,
        }
    }

    async componentDidMount() {
        const url = "https://assignment-machstatz.herokuapp.com/planet";
        const response = await fetch(url);
        const jsonres = await response.json();
        this.setState({ planets: jsonres });
    }

    makeFavorite(p) {
        if (!this.state.favoritePlanets.includes(p.name)) {
            this.setState({ favoritePlanets: [...this.state.favoritePlanets, p.name] });
        } else {
            let idxOfPlanet = this.state.favoritePlanets.indexOf(p.name);
            this.state.favoritePlanets.splice(idxOfPlanet, 1);
            this.setState({ favoritePlanets: [...this.state.favoritePlanets] });
        }
    }

    render() {
        const planets = this.state.planets;
        let favorites = this.state.favoritePlanets;
        return (
            <div className="App">
                {planets.length === 0 ?
                    <div className="loading">
                        <h2>Loading....</h2>
                    </div> :
                    <ul>
                        {planets.map((planet) => (
                            <li key={planet.id}>
                                <div className="planet-card">
                                    <div className="planet-info">
                                        <Planet planet={planet} />
                                    </div>
                                    <div className="favorite-icon">
                                        <span className="starIcon" onClick={() => this.props.updateFavorites(planet)}>
                                            {favorites.includes(planet.name) ? <FaStar /> : <FaRegStar />}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        );
    }
}

export default PlanetList;