import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import FavoriteButton from '../../container/favorite/FavoriteButton';

const Header = () => (
  <header className="header flex-grid">
    <div className="branding">
      <Link to="/" title="Go to home page">
        <img className="branding__logo" src={logo} alt="iTunes music store" />
      </Link>
    </div>
    <div className="my-favorites"><FavoriteButton /></div>
  </header>
);

export default Header;
