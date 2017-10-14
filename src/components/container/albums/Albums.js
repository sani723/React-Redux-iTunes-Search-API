import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumRow from '../../ui/albums/AlbumRow';
import { connect } from 'react-redux';
import store from '../../../store/';
import { loadAlbums, addFavoriteAlbum } from '../../../store/albumActions';

class Albums extends Component {

  handleSubmit = event => {
    event.preventDefault();
    store.dispatch( loadAlbums(this.artist.value,'search') );
  }

  render() {
    const { albums, isLoading } = this.props;

    let content = '';

    if(isLoading && !albums.length) {
      content = <p>Loading....</p>
    } else {
      content = albums.map( (album, index) => <AlbumRow key={album.collectionId} {...album} onClick={this.props.favoriteToggle} /> );
    }

    //const content = albums.map( (album, index) => <AlbumRow key={album.collectionId} {...album} onClick={this.props.favoriteToggle} /> );
    return (
      <div className="content flex-grid">
        <section className="music-search">
          <h1 className="music-search__title">iTunes Music</h1>
          <p className="music-search__meta">Discover your next favorite song, album, or artist. Search by artist entire iTunes library.</p>
          <form onSubmit={this.handleSubmit} className="search-form flex-grid">
            <input type="text" className="music-search__input" ref={(input) => this.artist = input} aria-label="Search albums by artist" placeholder="Search favorite artist" />
            <input type="submit" className="music-search__submit" value="Search" />
          </form>
          <section className="search-results">
            <h2>Search results</h2>
            <ul className="album-list">
              { content }
            </ul>
          </section>
        </section>
      </div>
    );
  }

}


const mapStateToProps = state => (
  {
    albums: state.albums,
    isLoading: state.fetchingStatus
  }
);


const mapDispatchToProps = dispatch => {
  return {
    favoriteToggle: (album) => dispatch( addFavoriteAlbum(album) )
  };
};

Albums.propTypes = {
  albums: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
