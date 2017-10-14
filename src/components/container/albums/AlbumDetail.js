import React,{ Component } from 'react';
//import * as API from '../../../api/api';
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
        <li key={index}>
          <p>{song.trackCensoredName}</p>
          <p>Price: {song.trackPrice} {song.currency}</p>
          <p>
            <audio controls="controls" preload="metadata">
              <source src={song.previewUrl} />
            </audio>
          </p>
        </li>
      )
    });

    return(
      <div className="content">
        <h1>Album Detail</h1>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    songs: state.songs,
    isLoading: false
  }
);

AlbumDetail.propTypes = {
  songs: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(AlbumDetail);
