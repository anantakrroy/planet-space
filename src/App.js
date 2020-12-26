import React, { useContext, useState } from "react";
import './App.css';
import { PlanetProvider } from './components/PlanetContext';
import Header from "./components/Header";


function App() {
  return (
    <PlanetProvider>
      <Header />
    </PlanetProvider>
  )
}


export default App;
