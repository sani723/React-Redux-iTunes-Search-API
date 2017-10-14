import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../../store/';
import { loadAlbumDetail } from '../../../store/albumActions';

class AlbumDetail extends Component {

  componentDidMount() {
    store.dispatch( loadAlbumDetail(this.props.match.params.collectionId,'lookup') );
  }

  render() {
    const { songs } = this.props;

    let content = songs.map( (song, index) => {
      return (
        <li className="artwork__item" key={song.trackId}>
          <div className="artwork__meta flex-grid">
            <picture>
              <source className="artwork__graphic" media="(min-width: 465px)" srcSet={song.artworkUrl60} />
              <source className="artwork__graphic" media="(min-width: 320px)" srcSet={song.artworkUrl30} />
              <img className="artwork__graphic" src={song.artworkUrl60} alt={song.artistName} />
            </picture>
            <span className="artwork__name">{song.trackCensoredName}</span>
            <span className="artwork__price">{song.trackPrice} {song.currency}</span>
            <span className="artwork__preview">
              <audio controls="controls" preload="metadata">
                <source src={song.previewUrl} />
              </audio>
            </span>
          </div>

        </li>
      )
    });

    return(
      <div className="content">
        <h1>Album Detail</h1>
        <ul className="artwork">
          {content}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    songs: state.songs,
    isLoading: false
  }
);

AlbumDetail.propTypes = {
  songs: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(AlbumDetail);
