import axios from 'axios';

const baseURL = (type) => type === 'search' ? 'https://itunes.apple.com/search?' : 'https://itunes.apple.com/lookup?';

const fetchArtistAlbums = (artist, type) => {
  const encodedURI =  `${baseURL(type)}term=${artist}&media=all&entity=album`;
  return axios.get(encodedURI)
    .then( (res) => res.data );
}

const fetchAlbumDetails = (collectionId, type) => {
  const encodedURI =  `${baseURL()}id=${collectionId}&entity=song&media=music`;
  return axios.get(encodedURI)
    .then( (res) => res.data );
}

export { fetchArtistAlbums, fetchAlbumDetails };
