import React from 'react'
import '../../App.css'

export default function Resume() {

    return (
        <section className='container'>
            {/* <h2 className='title'>RESUME</h2> */}
            
            <div className='resume'>
                <h3 className="subtitle">my skills & experience</h3>
                <a href='/Resume.pdf' download='Laura Fitzgerald Resume'>
                    <button id='downloadBtn' value='download' className='btn btn-success'>
                            Download Resume
                    </button>
                </a>
            </div>
            <div className='content' id="skills-section">
                <div className='proficiencies'>
                    <h4 className='resume-title'>Programming Languages & Technical Skills</h4>
                    <div className='container skills'>
                        <div className='row'>
                            <div className='col-sm'>
                                <div className='skills-column'>
                                    <ul className='skills-list'>
                                        <li>APIs</li>
                                        <li>Apollo Client/Server</li>
                                        <li>Bootstrap</li>
                                        <li>CSS</li>
                                        <li>DOM</li>
                                        <li>Express.js</li>
                                        <li>Git</li>
                                        <li>GraphQL</li>
                                        <li>Handlebars</li>
                                        <li>Heroku</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm'>
                                <div className='skills-column'>
                                    <ul className='skills-list'>
                                        <li>HTML</li>
                                        <li>Insomnia</li>
                                        <li>JavaScript</li>
                                        <li>Jest</li>
                                        <li>jQuery</li>
                                        <li>JSON</li>
                                        <li>MERN Stack</li>
                                        <li>MongoDB</li>
                                        <li>Mongoose</li>
                                        <li>MVC</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm'>
                                <div className='skills-column'>
                                    <ul className='skills-list'>
                                        <li>MySQL</li>
                                        <li>Node.js</li>
                                        <li>NoSQL</li>
                                        <li>OOP</li>
                                        <li>ORM</li>
                                        <li>PWA</li>
                                        <li>React</li>
                                        <li>RESTful APIs</li>
                                        <li>Sequelize</li>
                                        <li>Webpack</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className='resume-title'>Other Skills</h4>
                    <div className='container skills'>
                        <div className='row'>
                            <div className='col-sm'>
                                <div className='skills-column'>
                                    <ul className='skills-list'>
                                        <li>Excel</li>
                                        <li>Salesforce</li>
                                        <li>Looker</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm'>
                                <div className='skills-column'>
                                    <ul className='skills-list'>
                                        <li>Jira</li>
                                        <li>Tableau</li>
                                        <li>Asana</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm'>
                                <div className='skills-column'>
                                    <ul className='skills-list'>
                                        <li>Figma</li>
                                        <li>Braze</li>
                                        <li>monday.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}