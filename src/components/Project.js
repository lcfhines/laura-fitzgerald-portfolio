import React from 'react';


const Project = ({ name, image, technologies, deployed, github }) => {
    return (
      <div className='project col-sm-6'>
        <div className='card'>
        <img className='card-img-top img-responsive' src={image} alt='deployed app' />
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{technologies}</p>
            <div className='card-links'> 
              <a href={deployed} className='btn btn-success'>Deployed Application</a>
              <a href={github} className='btn btn-success'>GitHub Repository</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Project;
