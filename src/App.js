import React from "react";
import { Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import PlanetList from './components/PlanetList';
import FavoriteList from './components/FavoriteList';
import './App.css';
// import Header from "./components/Header";
import logo from './logo.jpg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAll: true,
      isFav: false,
      favoritePlanets: []
    }
  }

  updateFavorites(p) {
    if (!this.state.favoritePlanets.includes(p.name)) {
      this.setState({ favoritePlanets: [...this.state.favoritePlanets, p.name] });
    } else {
      let idxOfPlanet = this.state.favoritePlanets.indexOf(p.name);
      this.state.favoritePlanets.splice(idxOfPlanet, 1);
      this.setState({ favoritePlanets: [...this.state.favoritePlanets] });
    }
  }

  render() {
    const allPlanets = this.state.isAll;
    const favTab = this.state.isFav;
    return (
      <Router>
        {/* <Header /> */}
        <nav>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="App-tabs">
            <NavLink to="/" className={allPlanets ? "selected" : ""} onClick={() => this.setState({ isAll: true, isFav: false })}>All Planets</NavLink>
            <NavLink to="/favorites" className={favTab ? "selected" : ""} onClick={() => this.setState({ isFav: true, isAll: false })}>Favorites</NavLink>
          </div>
        </nav>
        <Route
          path="/"
          component={() => <PlanetList favoritePlanets={this.state.favoritePlanets} updateFavorites={(planet) => this.updateFavorites(planet)} />}
          exact
        />
        <Route
          path="/favorites"
          component={() => <FavoriteList favoritePlanets={this.state.favoritePlanets} />}
          exact
        />
      </Router>
    )
  }
}

export default App;
