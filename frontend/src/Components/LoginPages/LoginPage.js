import React from 'react'
import googleImage from '../../assets/googleImage.png'
import './Login.css';

const LoginPage = () => {
  const login=()=>{
    window.open('http://localhost:5000/auth/orcid','_self');
  }
  return (
    <div className='loginPage'>
      <div className='loginForm'>
      <h1>Login</h1>
      <div className='googleContainer' onClick={login}>
        <img src={googleImage} alt='google'></img>
        <p>Login With Orcid</p>
      </div>
      </div>
    </div>
  )
}

export default LoginPage