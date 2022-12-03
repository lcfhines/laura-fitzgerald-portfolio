import React from 'react';
import '../styles/Navigation.css'

// destructure props 
function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a 
                        href="#about"
                        // on click, run handlePageChange for the about page
                        onClick={() => handlePageChange('About')}
                        // set page based on what current page is
                        className ={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        href="#portfolio"
                        // on click, run handlePageChange for the about page
                        onClick={() => handlePageChange('Portfolio')}
                        // set page based on what current page is
                        className ={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        href="#contact"
                        // on click, run handlePageChange for the about page
                        onClick={() => handlePageChange('Contact')}
                        // set page based on what current page is
                        className ={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        href="#resume"
                        // on click, run handlePageChange for the about page
                        onClick={() => handlePageChange('Resume')}
                        // set page based on what current page is
                        className ={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
    </nav>
  )
}

export default Navigation;