import React from "react";
import { Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import PlanetList from './components/PlanetList';
import FavoriteList from './components/FavoriteList';
import './App.css';

class App extends React.Component {

  state = {
    isAll: true,
    isFav: false
  }

  render() {
    const allPlanets = this.state.isAll;
    const favTab = this.state.isFav;
    return (
      <Router>
        <nav>
          <NavLink to="/" className={allPlanets ? "selected" : ""} onClick={() => this.setState({ isAll: true, isFav : false })}>All Planets</NavLink>
          <NavLink to="/favorites" className={favTab ? "selected" : ""} onClick={() => this.setState({ isFav: true , isAll : false})}>Favorites</NavLink>
        </nav>
        <Route
          path="/"
          component={PlanetList}
          exact
        />
        <Route
          path="/favorites"
          component={FavoriteList}
        />
      </Router>
    )
  }
}

export default App;
