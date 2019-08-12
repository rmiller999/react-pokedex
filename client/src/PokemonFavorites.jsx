import React from 'react';

function PokemonFavorites({pokemon, favorites, deleteAFavorite}) {
  let content;
  content = favorites.map((favorite,id)=>{
    return (
      <div>
        <p key={id}>{favorite.toUpperCase()}</p>
        <button onClick={()=> deleteAFavorite(favorite)}>Remove Favorite</button>
      </div>
    )  
  })
  return (
    <div className="pokemonFavs">
      <p className="detail">Favorite Pokemon:</p>
      <p className="favs"> {content}</p>
    </div>
  )
}


export default PokemonFavorites;