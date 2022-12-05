import React from 'react'

const Project = ({ project }) => {
  return (
  <div className='project col-sm-3'>
      <img className='card-img-top img-responsive' style='width:100%' src={project.image} alt='image'></img>
      <div className='card-body'>
        <h5 className='card-title'>{project.name}</h5>
        <p className='card-text'>Technologies: {project.technologies}</p>
        <a href={project.deployed} className='btn btn-primary'>Deployed Application</a>
        <a href={project.github} className='btn btn-primary'>GitHub Repository</a>
      </div>
  </div>
  )
}

export default Project
