import React from 'react'
import '../../App.css'

export default function Resume() {

    return (
        <section className='container'>
            <h2 className='title'>Resume</h2>
            <h3 className="subtitle">my skills & experience</h3>
            <div className='content'>
                <div className='proficiencies'>
                    <h4 className='resume-title'>Proficiencies</h4>
                    {/* <p>HTML5, CSS, JavaScript, jQuery, APIs, Bootstrap,< br/>
                    Node.Js, Express.js, MySQL, Sequelize, ORM, MVC, Handlebars, Jest,< br/>
                    NoSQL, PWA, MongoDB, Mongoose, Webpack, ReactJS, MERN, GraphQL</p> */}
                    <div className='container skills'>
                        <div className='row'>
                            <div className='col-sm'>
                                <div className='skills-column'>
                                    <h5 className='skills-header'>Programming Languages</h5>
                                    <ul className='skills-list'>
                                        <li>HTML, HTML5</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>jQuery</li>
                                        <li>MySQL</li>

                                        <li>Git</li>
                                        <li>Bootstrap</li>
                                        <li>Document Object Model (DOM)</li>
                                        <li>APIs</li>
                                        
                                        <li>JSON</li>
                                        <li>RESTful APIs</li>
                                        <li>GraphQL</li>
                                        <li>Webpack</li>
                                        <li>Vite</li>
                                        <li>Apollo Client/Server</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm'>
                                <div className='skills-column'>
                                    <h5 className='skills-header'>Technical Skills</h5>
                                    <ul className='skills-list'>
                                        <li>Node</li>
                                        <li>ES6</li>
                                        <li>Object-Oriented Programming (OOP)</li>
                                        <li>Express</li>
                                        <li>MySQL</li>
                                        <li>Model-View-Controller (MVC)</li>
                                        <li>Sequelize</li>
                                        <li>Handlebars</li>
                                        <li>Jest</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm'>
                                <div className='skills-column'>
                                    <h5 className='skills-header'>Performance Skills</h5>
                                    <ul className='skills-list'>
                                        <li>Progressive Web Apps (PWA)</li>
                                        <li>React</li>
                                        <li>NoSQL</li>
                                        <li>MERN Stack</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='resume'>
                    <h4 className='resume-title'>Resume</h4>
                    <a href='/DraftResume.pdf' download='Laura Fitzgerald Resume'>
                        <button id='downloadBtn' 
                        value='download' className='btn btn-success'>
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}