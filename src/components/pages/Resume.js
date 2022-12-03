import React from 'react'

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
        <section className="container">
            <h2 className="title">Resume</h2>
            <div className="content">
                <button onClick={onButtonClick}>
                    Download Resume
                </button>
                <h3>Proficiences</h3>
                    <p>HTML5, CSS, JavaScript, jQuery, Node.js, Express.js,< br/>
                    MySQL, Sequelize, MongoDB, Mongoose, Webpack, ReactJS,< br/>
                    Handlebars, Bootstrap, NoSQL, PWA, MERN </p>
            </div>
        </section>
    )
}