import React from 'react'
import '../../styles/About.css'
import avatar from '../../assets/avatar.jpeg'

export default function About() {
    return (
        <section className="container">
            <h2 className="title">Hi! 👋 I'm Laura.</h2>
            <div className="content">
                <img className='avatar' src={avatar} alt='avatar' />
                <br />
                <p>I'm a new web developer who has just completed Columbia University's Coding Bootcamp and earned a certificate in full-stack web development.</p><br />
                <p>After graduating from the University of Virginia in 2014, I moved to New York and have worked in operational roles for the last 8 years. At my last company, a heathcare tech startup, I spent a lot of time collaborating with the engineers and developers and found myself intrigued by their work. This ultimately inspired me to make a pivot and enroll in the bootcamp.</p>
            </div>
        </section>
    )
}