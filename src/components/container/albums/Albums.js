import React, { Component } from 'react';

class Albums extends Component {

  render() {

    return (
      <div className="content flex-grid">
        <section className="music-search">
          <h1 className="music-search__title">iTunes Music</h1>
          <p className="music-search__meta">Discover your next favorite song, album, or artist. Search by artist entire iTunes library.</p>
          <form className="search-form flex-grid">
            <input type="text" className="music-search__input" aria-label="Search music by artist" placeholder="Search favorite artist" />
            <input type="submit" className="music-search__submit" value="Search" />
          </form>
          <section className="search-results">
            <h2>Search results</h2>
            <div className="artist-album">

            </div>
          </section>
        </section>
      </div>
    );
  }

}

export default Albums;
