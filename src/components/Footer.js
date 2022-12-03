import React from 'react'

const styles = {
  footer: {
    background: 'aliceblue',
    alignItems:'center',
    position: 'absolute',
    bottom: '0',
    width: '100%'
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
      </ul>      
    </footer>
    
  )
}

export default Footer