import React from 'react'
import '../../App.css'


export default function Contact() {
    return (
        <section className="container">
            {/* <h2 className="title">CONTACT</h2> */}
            <h3 className="subtitle">say hello</h3>
            {/* <form className='form'>
                <input className='formName' name='name' type='text' placeholder='name'/>
                <input className='formEmail'name='email' type='email' placeholder='email'/>
                <input className='formMessage' name='message' type='textArea' placeholder='message'/>
                <input className='btn btn-success formButton' type='submit' value='Send'/>
            </form> */}
            <div className="content" id="contact-content">
                <p>Please reach out with any questions or opportunities to collaborate.</p>
                <ul id="contact-list">
                    <li><b>EMAIL:</b><a href="mailto:lcfhines@gmail.com">LCFHINES@GMAIL.COM</a></li>
                    <li><b>ONLINE:</b> <a href="https://www.linkedin.com/in/laura-fitzgerald-hines/" target="_blank">LINKEDIN</a> / <a href="https://github.com/lcfhines" target="_blank">GITHUB</a></li>
                </ul>
            </div>
        </section>
    )
}