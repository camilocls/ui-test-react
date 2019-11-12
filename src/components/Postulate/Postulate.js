import React, { useState, useEffect, useContext } from 'react'
import imagePostulate from '../../assets/postulate.jpg'
import './Postulate.scss'

const Postulate = (props) => {
  return (
    <div className="container">
      <div className="postulate" style={{ backgroundImage: `url(${imagePostulate})` }}>
        <div className="postulate__text">Is there anyone else you would want us to add?</div>
        <a href="#postulate" className="postulate__link">Submit a Name</a>
      </div>
    </div>
  )
}

export default Postulate
