import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Albums from '../../container/albums/Albums';
import AlbumDetail from '../../container/albums/AlbumDetail';
import Favorites from '../../container/favorite/Favorites';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Albums} />
      <Route path="/album/:collectionId" component={AlbumDetail} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  </main>
);

export default Routes;
