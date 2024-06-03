import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Pokedex from '../Components/Pokedex/Pokedex';
import PokimonDetails from '../Components/PokimonDetails/PokimonDetails';

export const CustomRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Pokedex />} />
      <Route path='/pokemon/:id' element={<PokimonDetails />} />
    </Routes>
  );
};
