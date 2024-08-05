import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'


const Layout2 = () => {
  return (
    <div>
      <Navbar/>
      <div style={{height: '90vh'}}>
      <Outlet/>
      </div>
    </div>
  )
}

export default Layout2