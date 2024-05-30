import React from 'react'
import Search from '../Search/Search'
 import './Pokedex.css'
import PokimonList from '../PokimonList/PokimonList'
import Pokimon from '../Pokimon/Pokimon'

const Pokedex = () => {
  return (
      <div className='Pokedex-wrapper-word'>
       <h1 id='pokidex-hadding'>Pokidex</h1>

    <Search/>
    <PokimonList/>
    
    </div>
    
  )
}

export default Pokedex