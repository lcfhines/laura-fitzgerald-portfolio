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
                    <p>HTML5, CSS, JavaScript, jQuery, APIs, Bootstrap,< br/>
                    Node.Js, Express.js, MySQL, Sequelize, ORM, MVC, Handlebars, Jest,< br/>
                    NoSQL, PWA, MongoDB, Mongoose, Webpack, ReactJS, MERN, GraphQL
                    </p>
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