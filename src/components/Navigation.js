import React from 'react';
import '../styles/Navigation.css'

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <div>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    About Me
                </li>
                <li className="nav-item active">
                    Portfolio</li>
                <li className="nav-item active">
                    Contact
                </li>
                <li className="nav-item active">
                    Resume
                </li>
            </ul>
        </div>
    </nav>
    
  )
}

export default Navigation