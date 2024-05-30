import React from 'react';
import './Pokimon.css';

 
const Pokimon = ({ name, image }) => (
    

  <div className="pokemon-card">
    <h2>{name}</h2>
    {image && <img className='pokimon-img' src={image} alt={name} />}
  </div>
);

export default Pokimon;
