import React from 'react';
import Navigation from './Navigation'
import '../styles/Header.css'
 

function Header ( { currentPage, handlePageChange } ) {
  return (
    <header className="header">
        <h1>Laura Fitzgerald</h1>
        {/* <Navigation /> */}
    </header>
  )
}

export default Header