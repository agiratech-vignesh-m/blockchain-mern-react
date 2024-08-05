import React from 'react'
// import './navbar.css'
import logo from '../../assets/logo4.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
      <img src={logo} alt='logo' className='navbar-logo'/>
      </div>
      {/* <div className='navbar-center'>
        <p>Home</p>
        <p>Offers</p>
        <p>Contact us</p>
        <p>About us</p>
      </div>
      <div className='navbar-right'>
      <button> Sign up</button>
      </div> */}

    </div>
  )
}

export default Navbar