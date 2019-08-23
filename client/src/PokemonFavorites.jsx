import React from 'react';

function PokemonFavorites({handlePokemonDetail, favorites, deleteAFavorite}) {
  let content;
  content = favorites.map((favorite,id)=>{
    return (
      <div>
        <p onClick={()=>handlePokemonDetail(favorite)} key={id}>{favorite.toUpperCase()}</p>
        <button onClick={()=> deleteAFavorite(favorite)}>Remove Favorite</button>
      </div>
    )  
  })
  return (
    <div className="pokemonFavs">
      <h1 className="detail">Favorite Pokemon:</h1>
      <p className="favs"> {content}</p>
    </div>
  )
}


export default PokemonFavorites;