import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Albums from '../../container/albums/Albums';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Albums} />
    </Switch>
  </main>
);

export default Routes;
