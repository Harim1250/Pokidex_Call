import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokimonList.css';
import Pokimon from '../Pokimon/Pokimon';

// main function                                                                                                                 note--> hoock 
                                                                                                                                // 1. useState 2. useeffect.
function PokimonList() {

  const [pokemonList, setpokemonList] = useState([]);
  const [isLoading , setisLoading] = useState(true);

  const [pokemonUrl, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon');

  const [nextbutton,setnextbutton] = useState('');
  const [prevbutton, setpprevbutton] = useState('');

  async function downoloadedapi() {
    const response = await axios.get(pokemonUrl);
    setisLoading(true);
         
    // const pokimonResults = response.data.results;
    const pokimonResult = response.data.results;

    console.log(response.data);
    setnextbutton(response.data.next);
    setpprevbutton(response.data.previous)


    const pokimonResultpromise = pokimonResult.map((pokemon) => axios.get(pokemon.url));
    const pokemonData = await axios.all(pokimonResultpromise);
    
    console.log(pokemonData);

    const res = pokemonData.map((pokeData)=> {
      const pokemon = pokeData.data;
     
      
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites?.other?.dream_world?.front_default,
        types: pokemon.types.map(typeInfo => typeInfo.type.name)
      };
    });

    console.log(res);
    setpokemonList(res);
    setisLoading(false);

      setisLoading(false);
      

  }

  // make connection with outer world such as sownoloding the data from other side and calling to its main data.

  useEffect( () => {

    downoloadedapi();
    
    
  
  } , [pokemonUrl]);


  return (
   <div className='pokimon-List'>


<div className='pokimonList-wrapper'>
   { (isLoading) ? 'loading....' : 
     pokemonList.map((p)=> <Pokimon name = {p.name} image={p.image} key = {p.id}/>)
  
   } 

</div>

   <div className='controll'>
    <button disabled = {prevbutton==null} onClick={() => setPokemonUrl(prevbutton)}>Prev</button>
    <button disabled = {nextbutton==null} onClick={() => setPokemonUrl(nextbutton)}>Next</button>
   </div>

   </div>
  )
}

export default PokimonList;