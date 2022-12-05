import React from 'react';
import Project from '../Project';

const projects = [
    {
        id: 0,
        name: 'SportSpot',
        technologies: 'Node.js, Express.js, Handlebars.js, MySQL, Sequelize',
        github: 'https://github.com/ereneedolan/Sport-spot',
        deployed: 'https://the-sport-spot-team-1.herokuapp.com/',
        image: './images/sportspot.png'
    }
]

// const projectList = ({projects}) => {
//     const renderedList = projects.map((project) => {
//         return <Project key={project.id} project={project} />
//     })
// }

export default function Portfolio() {
    return (
        <section className='container'>
            <h2 className='title'>Portfolio</h2>
            <div className='content'>
                <div className='container-fluid bg-3 text-center'>
                    <div className='row'>
                        <Project projects={projects} />
                    </div>
                </div>
            </div>
        </section>
    )
}
