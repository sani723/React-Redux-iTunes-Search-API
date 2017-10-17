
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import MdFavorite from 'react-icons/lib/md/favorite';

//const secondFunc = () => console.log("Second Function Called!");


const AlbumRow = (props) => {

  const {collectionId,collectionName,artistName,artworkUrl60, artworkUrl100} = props;

  let Icon = "";
  if(props.iconType === "outline") { //()=> { props.onClick.bind(null, props); secondFunc();}
    Icon = <MdFavoriteOutline className="album-list__favorite pulse" onClick={ props.onClick.bind(null, props) } />
  } else {
    Icon = <MdFavorite className="album-list__favorite pulse" onClick={props.onClick.bind(null, props)} />
  }



    return (
      <li className="album-list__item">
        <Link to={`/album/${collectionId}`}>
          <picture>
            <source className="album-list__graphic circle" media="(min-width: 650px)" srcSet={artworkUrl100} />
            <source className="album-list__graphic circle" media="(max-width: 465px)" srcSet={artworkUrl60} />
            <img className="album-list__graphic circle" src={artworkUrl100} alt={artistName} />
          </picture>
          <span className="album-list__name">{collectionName}</span>
        </Link>
        {Icon}




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
