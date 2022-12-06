import React from 'react'
import '../../App.css'


export default function Contact() {
    return (
        <section className="container">
            <h2 className="title">Contact</h2>
            <h3 className="subtitle">say hello</h3>
            <form className='form'>
                <input className='formName' name='name' type='text' placeholder='name'/>
                <input className='formEmail'name='email' type='email' placeholder='email'/>
                <input className='formMessage' name='message' type='textArea' placeholder='message'/>
                <input className='btn btn-success formButton' type='submit' value='Send'/>
            </form>
            <div className="content">
                <p>Or send me an email at <b>lcfhines@gmail.com</b>!</p>
            </div>
        </section>
    )
}