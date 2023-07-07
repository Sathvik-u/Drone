import React from 'react'
import { Link } from 'react-router-dom'
function NavigationBar() {
  return (
    <div className='container-fluid'>
      <nav className="navbar navbar-expand-sm bg-secondary fs-5 rounded-pill border-dark">
 
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav nav-item ms-auto">
      <Link className=" nav-link active text-white" to='/'>Home</Link>
      <Link className=" nav-link active text-white" to='/specifications'>Specifications</Link>
      <Link className=" nav-link text-white" to='/project-details'>Project Details</Link>
      <Link className="nav-link text-white" to='/Components'>Components</Link>
      <Link className="nav-link text-white" to='/about'>About</Link>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavigationBar