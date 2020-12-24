import React from 'react';
import Planet from './Planet';
import Header from './Header';
import { FaStar, FaRegStar } from "react-icons/fa";


class PlanetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            favoritePlanets: [],
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
            let idxOfPlanet = this.state.favoritePlanets.indexOf(p);
            this.state.favoritePlanets.splice(idxOfPlanet, 1);
            this.setState({ favoritePlanets: [...this.state.favoritePlanets] });
        }
    }

    render() {
        const planets = this.state.planets;
        console.log(planets.length);
        return (
            <div className="App">
                <Header />
                {planets.length === 0 ?
                    <div className="loading">Loading....</div> :
                    <ul>
                        {planets.map((planet) => (
                            <li key={planet.id}>
                                <div className="planet-card">
                                    <div className="planet-info">
                                        <Planet planet={planet} />
                                    </div>
                                    <div className="favorite-icon">
                                        <span className="starIcon" onClick={() => this.makeFavorite(planet)}>
                                            {this.state.favoritePlanets.includes(planet.name) ? <FaStar /> : <FaRegStar />}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>}
            </div>
        );
    }
}

export default PlanetList;