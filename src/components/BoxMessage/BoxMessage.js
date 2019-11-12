import React, { useState } from 'react'
import './BoxMessage.scss'
import iconClose from '../../assets/icon-close.svg'

const BoxMessage = (props) => {
  const [show, setShow] = useState(true)

  const onClose = () => {
    setShow(false)
  }

  if(!show) return null;

  return (
    <div className="container">
      <div className="box-message">
        <div className="box-message__headline">
          <div className="box-message__headline-first-line">Speak out. Be heard. </div>
          <div className="box-message__headline-second-line">Be counted</div>
        </div>
        <div className="box-message__text">
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
        </div>
        <button onClick={onClose} className="box-message__close">
          <img className="box-message__close-img" src={iconClose} alt="CLose"/>
        </button>
      </div>
    </div>
  );
}

export default BoxMessage
