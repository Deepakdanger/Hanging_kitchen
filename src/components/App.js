import React from 'react';
import Categorylist from '../containers/Categorylist';
import Lists from '../containers/Lists';
import FoodContainer from '../containers/FoodContainer';
import Navbar from './Navbar';

const App = () => (
  <div className="app">
    <Navbar />
    <Lists />
    <Categorylist />
    <FoodContainer />
  </div>
);

export default App;
