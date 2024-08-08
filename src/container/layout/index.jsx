import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import Navbar2 from './navbar2'


const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
      <div style={{height: '90vh'}}>
      <Outlet/>
      </div>
    </div>
  )
}

export default Layout