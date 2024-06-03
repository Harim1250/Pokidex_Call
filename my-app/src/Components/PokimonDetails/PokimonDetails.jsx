import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({
    name: '',
    image: '',
    height: '',
    weight: '',
    types: []
  });

  async function downloadPokemon() {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon({
        name: response.data.name,
        image: response.data.sprites.other['official-artwork'].front_default,
        height: response.data.height,
        weight: response.data.weight,
        types: response.data.types.map(t => t.type.name)
      });
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  }

  useEffect(() => {
    downloadPokemon();
  }, [id]);

  return (
    <div className='pokemon-details-wrapper'>
      <div className='pokemon-name'>Name: {pokemon.name}</div>
      <img className='pokemon-details-image' src={pokemon.image} alt={pokemon.name} />
      <div>Height: {pokemon.height}</div>
      <div>Weight: {pokemon.weight}</div>
      <div className='pokemon-details-types'>
        {pokemon.types.map(t => (
          <div key={t}>{t}</div>
        ))}
      </div>
    </div>
  );
}

export default PokemonDetails;
