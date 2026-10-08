import React from 'react'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className="logo">
            Mini-School -LMS
        </div>
        
        <div className="nav-links">
          <NavLink to="/dashboard">DashBoard</NavLink>  
          <NavLink to="/assignments">Assignments</NavLink>  

         </div>
    
          <div className="nav-right">
            <Logout/>
          </div>
    </nav>
)
}

export default Navbar 