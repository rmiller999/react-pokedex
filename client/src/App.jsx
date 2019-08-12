import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PokemonList from './PokemonList';
import PokemonDetail from './PoekmonDetail';
import PokemonFavorites from './PokemonFavorites';


function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonId, setPokemonId] = useState(1)
  const [singlePokemon, setSinglePokemon] = useState({})
  const [favorites, setFavorites] = useState([])
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => {
      setPokemon(response.data.results);
    })
    axios.get('/pokemon/').then((response)=> {
      const oldFaves = response.data.map(pokemon => {
        return pokemon.name
      })
      setFavorites(oldFaves)
    })
  }, [])
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((response) => {
      setSinglePokemon(response.data);
    })
  }, [pokemonId])
  
  const addToFavorites = (pokemon) => {
    const newPokemonFavs = [...favorites, pokemon]
    setFavorites(newPokemonFavs)
    axios.post(`/pokemon/`, {name: pokemon}).then((response) => {
    })
  }

  const deleteAFavorite = (favorites) => {
    axios.delete(`/pokemon/${favorites}/`).then((response) => {
      axios.get('/pokemon/').then((response) => {
        let fav = response.data.map(pokemon => (
          pokemon.name
        ))
        setFavorites(fav)
      })
    })
  }

  return (
    <>
    <img id='logo' src="/logo.png" alt="" />
    <div className='container'>
      <PokemonList pokemon={pokemon} handlePokemonDetail={setPokemonId} addToFavorites={addToFavorites} />
      <div className="fixed">
        <PokemonDetail singlePokemon={singlePokemon} pokemonId={pokemonId}/>
        <PokemonFavorites favorites={favorites} deleteAFavorite={deleteAFavorite} />
      </div>
    </div>
    </>
  );
}

export default App;
