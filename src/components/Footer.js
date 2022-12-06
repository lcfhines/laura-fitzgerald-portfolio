import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  footer: {
    alignItems:'center',
    width: '100%',
    justifyContent: 'center'
  },
  div: {
    color: 'navy'
  }
}

const Footer = () => {
  return (
    <footer className='footer navbar' style={styles.footer}>
      <ul className='navbar-nav'>
        <li className='footer-link nav-item'><a href="https://github.com/lcfhines" target="_blank">GitHub</a></li>
        <li className='footer-link nav-item'><a href="https://www.linkedin.com/in/laura-fitzgerald-4ab69572/" target="_blank">LinkedIn</a></li>
        <li className='footer-link nav-item'><a href="https://medium.com/@lcfhines" target="_blank">Medium</a></li>
        {/* <li className='footer-link nav-item'><a href="https://github.com/lcfhines" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" /></a></li>
        <li className='footer-link nav-item'><a href="https://www.linkedin.com/in/laura-fitzgerald-4ab69572/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></li>
        <li className='footer-link nav-item'><a href="https://medium.com/@lcfhines" target="_blank"><FontAwesomeIcon icon="fa-brands fa-medium" /></a></li> */}
      </ul>      
    </footer>
    
  )
}

export default Footer