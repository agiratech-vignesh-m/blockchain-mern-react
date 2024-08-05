import React from 'react'
import './navbar.css'
import logo from '../../assets/logo4.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
      <img src={logo} alt='logo' className='navbar-logo'/>
      <h1 style={{
        fontFamily: 'Monospace'
      }}>CHECKMATE</h1>
      </div>
      <div className='navbar-center'>
        <p>Home</p>
        <p>Offers</p>
        <p>Contact us</p>
        <p>About us</p>
      </div>
    </div>
  )
}

export default Navbar