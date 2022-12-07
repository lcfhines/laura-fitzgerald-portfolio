import React from 'react'
import { Github, Medium, Linkedin } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className="col item social">
          <a href="https://github.com/lcfhines"><i className="icon"><Github /></i></a>
          <a href="https://www.linkedin.com/in/laura-fitzgerald-4ab69572/"><i class="icon"><Linkedin /></i></a>
          <a href="https://medium.com/@lcfhines"><i className="icon"><Medium /></i></a>
        </div>
        <p className='copyright'>🍒 LFH &copy; 2022</p>    
      </div>  
    </footer>
    
  )
}

export default Footer