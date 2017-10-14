
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MdFavorite from 'react-icons/lib/md/favorite';

const AlbumRow = (props) => {

      const {collectionId,collectionName,artistName,artworkUrl100} = props;
      return (
        <li className="album-list__item">
          <Link to={`/album/${collectionId}`}>
            <img className="album-list__graphic" src={artworkUrl100} alt={artistName} />
            <p>{artistName} <br /> {collectionName}</p>
          </Link>
          <MdFavorite className="album-list__item-favorite" onClick={props.onClick.bind(null, props)} />
        </li>

      );

}
AlbumRow.propTypes = {
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default AlbumRow;
