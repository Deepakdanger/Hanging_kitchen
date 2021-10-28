import React from 'react';
import Categorylist from '../containers/Categorylist';
import Lists from '../containers/Lists';
import FoodContainer from '../containers/FoodContainer';

const App = () => (
  <div className="app">
    <Lists />
    <Categorylist />
    <FoodContainer />
  </div>
);

export default App;
