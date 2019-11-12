import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss';

const Header = (props) => {
  const { floating } = props
  return (
    <header className={`header${floating ? ' header--floating' : ''}`}>
      <div className="container header__container">
        <div className="header__logo-text">Rule of Thumb.</div>
        <div className="header__right">
          <div className="header__menu">
            <Link to="/past-trials" className="header__menu-item">Past Trials</Link>
            <Link to="/how-it-works" className="header__menu-item">How It Works</Link>
            <Link to="/login" className="header__menu-item">Log In / Sign Up</Link>
          </div>
          <SearchBar className="header__search" />
        </div>
      </div>
    </header>
  );
}

export default Header;
