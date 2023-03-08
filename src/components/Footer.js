import React from 'react'
import { Github, Medium, Linkedin } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className="col item social">
          <a href="https://github.com/lcfhines" target="_blank"><i className="icon"><Github /></i></a>
          <a href="https://www.linkedin.com/in/laura-fitzgerald-hines/" target="_blank"><i class="icon"><Linkedin /></i></a>
          <a href="https://medium.com/@lcfhines" target="_blank"><i className="icon"><Medium /></i></a>
        </div>
        <p className='copyright'>🍒 LFH &copy; 2022</p>    
      </div>  
    </footer>
    
  )
}

export default Footer