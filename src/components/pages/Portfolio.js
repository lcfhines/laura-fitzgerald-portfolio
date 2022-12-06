import React from 'react';
import Project from '../Project';
import '../../App.css'
import '../../styles/Portfolio.css'
import { projectList } from '../../helpers/ProjectList'


export default function Portfolio() {
    return (
        <div className='portfolio container'>
            <h2 className='title'>My Work</h2>
            <h3 className='subtitle'>some projects I've built</h3>
            <div className='content projectList'>
                {projectList.map((project, index) => {
                    return <Project key={index} name={project.name} image={project.image} technologies={project.technologies} deployed={project.deployed} github={project.github}/>
                })}
            </div>
        </div>
    )
}
