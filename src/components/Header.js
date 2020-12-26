import React, { useContext, useState } from 'react';
import logo from './../logo.jpg';
import { Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import PlanetList from './PlanetList';
import FavoriteList from './FavoriteList';
import { PlanetContext } from './PlanetContext';

function Header() {
    const [tab, setTab] = useState({ isAll: true, isFav: false });
    const [_, favPlanets] = useContext(PlanetContext);

    return (
        <Router>
            <nav>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="App-tabs">
                    <NavLink to="/" className={tab.isAll ? "selected" : ""} onClick={() => setTab({ isAll: true, isFav: false })}>All Planets</NavLink>
                    <NavLink to="/favorites" className={tab.isFav ? "selected" : ""} onClick={() => setTab({ isAll: false, isFav: true })}>Favorites ({favPlanets.length})</NavLink>
                </div>
            </nav>

            <Route
                path="/"
                component={() => <PlanetList />}
                exact
            />
            <Route
                path="/favorites"
                component={() => <FavoriteList />}
                exact
            />
        </Router>
    );
}

export default Header;