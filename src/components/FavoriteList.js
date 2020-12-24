import React from 'react';
import Header from './Header';
import PlanetList from './PlanetList';

class FavoriteList extends React.Component {
    render() {
        console.log("Props passed ? ", this.props)
        return (
            <div className="App">
                <PlanetList favoritePlanets={this.props.favoritePlanets}/>
            </div>
        )
    }
}

export default FavoriteList;