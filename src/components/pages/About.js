import React from 'react'
import '../../App.css'
import avatar from '../../assets/avatar.jpeg'

export default function About() {
    return (
        <section className="container">
            <h2 className="title">I'm Laura.</h2>
            <h3 className="subtitle">hi!</h3>
            <div className="content">
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <img className='avatar' src={avatar} alt='avatar' />
                        </div>
                        <div className='col-sm-6'>
                            <p>I'm an NYC based web developer who has just completed Columbia University's Coding Bootcamp and earned a certificate in full-stack web development.</p>
                        </div>
                    </div>
                    <p>I have 8+ years of professional experience in a variety of operational roles in New York. As Chief of Staff to the COO at my last company, a healthcare tech startup, I spent a lot of time collaborating with the engineers and developers and found myself intrigued by their work. That work ultimately inspired me to make a pivot and enroll in Columbia's bootcamp.</p>
                </div>
            </div>
        </section>
    )
}