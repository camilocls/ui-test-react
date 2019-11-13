import React, { useEffect, useState, useRef, useContext } from 'react'
import './Login.scss'

const Login = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className="login">
      <form className="login__form" action="" onSubmit={handleSubmit}>
        <input className="login__field login__field--text" type="email" placeholder="E-mail" required />
        <input className="login__field login__field--text" type="password" placeholder="Password" required />
        
        <div className="login__actions">
          <button className="login__send">Sign In</button>
          <a className="login__forgot" href="#forgot">Forgot Your Password?</a>
        </div>
      </form>
    </div>
  );
}

export default Login
