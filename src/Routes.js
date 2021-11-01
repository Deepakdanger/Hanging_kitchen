import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Navbar from './components/Navbar';
import FoodContainer from './containers/FoodContainer';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/food" component={FoodContainer} />
    </Switch>
  </BrowserRouter>

);

export default Routes;
