import React from 'react';

function PokemonDetail({singlePokemon, pokemonId}) {
  let content;
  if (Object.keys(pokemonId).length > 0) {
    // there are cats
    content = (
      <div >
        <h2> { pokemonId.toUpperCase()} </h2>
        <img className="pokemonImg" src={ singlePokemon.sprites.front_default} alt="" />

        <h3> <span>Height:</span>  {singlePokemon.height} </h3>
        <h3> <span>Weight:</span>  {singlePokemon.weight} </h3>
        <h3> <span>Abilities:</span> {singlePokemon.abilities[0].ability.name} </h3>
        <h3> <span>Moves:</span>  {singlePokemon.moves[0].move.name}, {singlePokemon.moves[1].move.name}</h3>
        <h3> <span>Stats:</span>  {singlePokemon.stats[0].stat.name}: {singlePokemon.stats[0].base_stat}</h3>
        <h3> {singlePokemon.stats[3].stat.name}: {singlePokemon.stats[3].base_stat}</h3>
        <h3> {singlePokemon.stats[4].stat.name}: {singlePokemon.stats[4].base_stat}</h3>
      </div>
    )
  } else {
    content = (
    <div >
      <p>No pokemon selected</p>
    </div>
    )
  }

  return (
    <div className="pokemonDetails">
      <p className="detail">View Pokemon Details</p>
      <hr/>
      {content}
    </div>
  )
}


export default PokemonDetail;