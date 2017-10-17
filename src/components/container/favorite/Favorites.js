import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumRow from '../../ui/albums/AlbumRow';
import { connect } from 'react-redux';
import store from '../../../store/';
import { removeFavoriteAlbum, loadFavoriteAlbums, loadFilteredFavoriteAlbumsByArtist } from '../../../store/albumActions';

class Albums extends Component {

  componentDidMount() {
    store.dispatch( loadFavoriteAlbums() );
    store.dispatch(loadFilteredFavoriteAlbumsByArtist("allArtists"));
  }

  removeDuplicates = (originalArray, property) =>  {
     let newArray = [];
     let lookupObject  = {};

     for(var i in originalArray) {
        lookupObject[originalArray[i][property]] = originalArray[i];
     }

     for(i in lookupObject) {
         newArray.push(lookupObject[i]);
     }
      return newArray;
  }


  renderAlbumArtwork = (favorites) => {
    const content = favorites.map( (album, index) => <AlbumRow iconType="filled" key={album.collectionId} {...album} onClick={this.props.favoriteToggle} /> );
    return content;
  }

  filterResults = (event) => {

    store.dispatch(loadFilteredFavoriteAlbumsByArtist(event.target.value));
  }

  render() {
    const { favorites, filteredArtists } = this.props;
    const uniqueArtists = this.removeDuplicates(favorites, "artistName");
    const artistList = uniqueArtists.map((item, index) => <option key={item.collectionId} value={item.artistName}>{item.artistName}</option>)


    return (
      <div className="content flex-grid">

        <section className="search-results">
          <h2>My Favorites</h2>
          <select onChange={this.filterResults}>
            <option value="allArtists">Filter by artist</option>
            {artistList}
          </select>
          <ul className="album-list favorites">
            { this.renderAlbumArtwork(filteredArtists) }
          </ul>
        </section>
      </div>
    );
  }

}


const mapStateToProps = state => ({
  favorites: state.favorites,
  filteredArtists: state.filteredArtists
});


const mapDispatchToProps = dispatch => {
  return {
    favoriteToggle: (album) => dispatch( removeFavoriteAlbum(album) )
  };
};

Albums.propTypes = {
  favorites: PropTypes.array.isRequired,
  filteredArtists: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
