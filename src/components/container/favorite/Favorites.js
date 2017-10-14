import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumRow from '../../ui/albums/AlbumRow';
import { connect } from 'react-redux';
import store from '../../../store/';
import { removeFavoriteAlbum } from '../../../store/albumActions';

class Albums extends Component {

  componentDidMount() {

  }

  render() {
    const { albums } = this.props;

    const content = albums.map( (album, index) => <AlbumRow key={album.collectionId} {...album} onClick={this.props.favoriteToggle} /> );

    return (
      <div className="content flex-grid">

        <section className="search-results">
          <h2>My Favorites</h2>
          <ul className="album-list">
            { content }
          </ul>
        </section>
      </div>
    );
  }

}


const mapStateToProps = state => (
  {
    albums: state.favorites
  }
);


const mapDispatchToProps = dispatch => {
  return {
    favoriteToggle: (album) => dispatch( removeFavoriteAlbum(album) )
  };
};

Albums.propTypes = {
  albums: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
