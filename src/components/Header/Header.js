import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import iconMenu from '../../assets/icon-menu.svg'
import iconClose from '../../assets/icon-close-white.svg'
import './Header.scss';

const Header = (props) => {
  const { floating } = props
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState()

  return (
    <header className={`header${floating ? ' header--floating' : ''}`}>
      <div className="container header__container">
        <Link to="/" className="header__link-logo">
          <div className="header__logo-text">Rule of Thumb.</div>
        </Link>
        <div className="header__right">
          <nav className="header__menu">
            <Link to="/past-trials" className="header__menu-item">Past Trials</Link>
            <Link to="/how-it-works" className="header__menu-item">How It Works</Link>
            <a href="#login" className="header__menu-item">Log In / Sign Up</a>
          </nav>
          <SearchBar className="header__search" />
          <button onClick={() => setIsMenuMobileOpen(true)} className="header__icon-menu-mobile">
            <img src={iconMenu} alt="Open menu mobile" />
          </button>
        </div>
      </div>

      {isMenuMobileOpen && (
        <div className="header__nav-mobile">
          <nav className="header__nav-mobile-menu">
            <Link to="/past-trials" className="header__nav-mobile-item">Past Trials</Link>
            <Link to="/how-it-works" className="header__nav-mobile-item">How It Works</Link>
            <a href="#login" className="header__nav-mobile-item">Log In / Sign Up</a>
          </nav>
          <button onClick={() => setIsMenuMobileOpen(false)} className="header__close">
            <img src={iconClose} alt="Close menu mobile" />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
