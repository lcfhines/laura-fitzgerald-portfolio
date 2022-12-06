import React from 'react'
import '../../App.css'

export default function Resume() {
    // set up download function on click
    const onButtonClick = () => {
        fetch('DraftResume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.dowload = 'DraftResume.pdf';
                alink.click();
            })
        })
    }

    return (
        <section className='container'>
            <h2 className='title'>Resume</h2>
            <h3 className="subtitle">my skills & experience</h3>
            <div className='content'>
                <button onClick={onButtonClick} className='btn btn-success'>
                    Download Resume
                </button>
                <h3>Proficiencies</h3>
                    <p>HTML5, CSS, JavaScript, jQuery, APIs, Bootstrap,< br/>
                    Node.Js, Express.js, MySQL, Sequelize, ORM, MVC, Handlebars, Jest,< br/>
                    NoSQL, PWA, MongoDB, Mongoose, Webpack, ReactJS, MERN, GraphQL</p>
                    
            </div>
        </section>
    )
}