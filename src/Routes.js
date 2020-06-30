import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DogDetails from './DogList';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/dogs'>
        <DogList />
      </Route>

      <Route path='dogs/:name'>
        <DogDetails />
      </Route>
      <Redirect to='/dogs' />
    </Switch>
  );
};

export default Routes;
