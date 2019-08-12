import React from 'react';

function PokemonList({pokemon, handlePokemonDetail, addToFavorites}) {
  let content;
  content = pokemon.map((pokemon,id)=>{
    return (
      <div className='list'>
        <p onClick={()=>handlePokemonDetail(pokemon.name)} key={id}>{pokemon.name.toUpperCase()}</p>
        <button onClick={()=>addToFavorites(pokemon.name)} type="submit">Add to Favorites</button>
      </div>
    )
  })

  return (
    <div className="pokemonList">
      {content}
    </div>
  )
}


export default PokemonList;