import React from "react";
import "./App.css";
import pokemons from "./services/data";
import Pokedex from "./pages/Pokedex/Pokedex";

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
