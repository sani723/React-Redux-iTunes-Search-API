import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../../../store/';
import { favoriteCount } from '../../../store/albumActions';

class FavoriteButton extends Component {

  componentDidMount() {
    store.dispatch( favoriteCount() );
  }

  render() {
    const favorites = this.props.favorites;

    if(!favorites.length) {
      return null;
    }

    return (
      <Link to="/favorites">My Favorites</Link>
    );
  }
}

const mapStateToProps = state => ({
    favorites: state.favorites
  });

export default connect(mapStateToProps)(FavoriteButton);
