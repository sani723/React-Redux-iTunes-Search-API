import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Albums from '../../container/albums/Albums';
import AlbumDetail from '../../container/albums/AlbumDetail';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Albums} />
      <Route path="/album/:collectionId" component={AlbumDetail} />
    </Switch>
  </main>
);

export default Routes;
