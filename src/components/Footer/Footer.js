import React from 'react'
import iconFacebook from '../../assets/icon-facebook.svg'
import iconTwitter from '../../assets/icon-twitter.svg'
import './Footer.scss'

const Footer = (props) => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer__menu">
          <a href="#terms">Terms and Conditions</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="footer__socialmedia">
          <div className="footer__socialmedia-label">Folow Us</div>
          <div className="footer__socialmedia-items">
            <a href="#facebook" className="footer__socialmedia-item">
              <img src={iconFacebook} alt="Facebook"/>
            </a>
            <a href="#twitter" className="footer__socialmedia-item">
              <img src={iconTwitter} alt="Twitter"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
