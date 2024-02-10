import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/trunks';

export const PokemonApp = () => {


  const { isLoading, pokemons, page  } = useSelector( state => state.isLoading )

  console.log(pokemons)

  const nextPage = () => {
    dispatch( getPokemons(page) )
  }

  const dispatch = useDispatch();

  useEffect(() =>{ 
    dispatch( getPokemons() );
  }, [])


  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <h3>{ isLoading ? 'Loading...' : 'Listo' }</h3>
      <p>Página: { page } </p>
      <ul>
        {
          pokemons.map(pokemon=>(
            <li key={pokemon.name}>{pokemon.name}</li>
          ))
        }
      </ul>

      <button onClick={nextPage}>
        Siguiente 
      </button>

    </>
  )
}
