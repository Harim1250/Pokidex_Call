import React from 'react';
import './Pokimon.css';
import { Link } from 'react-router-dom';

const Pokemon = ({ name, image, id }) => (
  <div className="pokemon-card">
    <Link to={`/pokemon/${id}`}>
      <h2>{name}</h2>
      {image && <img className='pokemon-img' src={image} alt={name} />}
    </Link>
  </div>
);

export default Pokemon;
