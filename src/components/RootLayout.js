import React from 'react'
import Footer from './rootComponents/Footer'
import NavigationBar from './rootComponents/NavigationBar'
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <NavigationBar />
        <div style={{minHeight:"100vh"}}>
        <Outlet />
        </div>
        <Footer />
    </div>
    
  )
}

export default RootLayout