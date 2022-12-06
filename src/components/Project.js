import React from 'react';

const styles = {
  img: {
    width: '100%',
    padding: '10px'
  },
  card: {
    backgroundColor: '#C7F3C1',
    padding: '10px'
  },
  project: {
    padding: '15px'
  }
}

const Project = ({ name, image, technologies, deployed, github }) => {
    return (
      <div className='project col-sm-6' style={styles.project}>
        <div className='card' style={styles.card}>
        <img className='card-img-top img-responsive' src={image} alt='deployed app' style={styles.img} />
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{technologies}</p>
            <div className='card-links'> 
              <a href={deployed} target='_blank' className='btn btn-success btn-app'>Deployed Application</a>
              <a href={github} target='_blank' className='btn btn-success btn-app'>GitHub Repository</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Project;
