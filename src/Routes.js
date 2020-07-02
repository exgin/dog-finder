import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DogDetails from './DogDetails';
import DogList from './DogList';
import dogs from './dogs';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/dogs'>
        <DogList dogs={dogs} />
      </Route>

      <Route path='/dogs/:name'>
        <DogDetails dogs={dogs} />
      </Route>
      <Redirect to='/dogs' />
    </Switch>
  );
};

export default Routes;
