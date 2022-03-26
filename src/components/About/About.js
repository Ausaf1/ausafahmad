import React from 'react'
import "./About.css"
import web from "../../images/web.png"
import javascript from "../../images/js.png"
import cpp from "../../images/cpp.png"

function About() {
    return (
        <div className='About' id='about'>
            <div className="about__left">
                <div className="about__cards">
                    <div className="about__card" data-aos="fade-right" data-aos-duration="1000">
                        <div className="card__top">
                            <p className="card__title">Web Development</p>
                            <img src={web} className="card__icon" alt="" />
                        </div>
                        <p className="card__desc">I am Web Development enthusiast and created many sites that meets user expectations</p>
                        <p className="card__link">10+ projects</p>
                    </div>
                    <div className="about__card" data-aos="fade-right" data-aos-delay="1000">
                        <div className="card__top">
                            <p className="card__title">JavaScript</p>
                            <img src={javascript} className="card__icon" alt="" />
                        </div>
                        <p className="card__desc">JavaScript is used to develop interactive web applications.I learnt Reactjs for front which is a library of JavaScript and Nodejs for backend which is a JavaScript runtime.</p>
                        <p className="card__link">8+ projects</p>
                    </div>
                    <div className="about__card" data-aos="fade-right" data-aos-delay="500">
                        <div className="card__top">
                            <p className="card__title">Cpp</p>
                            <img src={cpp} className="card__icon" alt="" />
                        </div>
                        <p className="card__desc">I have learn many languages like C,Cpp,Java,Python etc but I use Cpp for Data Structures and Algorithms.</p>
                        <p className="card__link">5+ projects</p>
                    </div>
                </div>
            </div>
            <div className="about__right">
                <p className="about_subtitle">Introduction</p>
                <p className="about__title">while(!(succeed == try()));</p>
                <p className="about__info">
                    You have no choice but to operate in a world shaped by globalization and the information revolution. There are two options: Adapt or die.</p>
                <p className="about__desc">
                    I am technically inclined person with good communication,math and programming skills. I am a firm believer that helping others is the quick way to find true happiness, making someones day a little bit brighter will in turn make your own day that much better.
                </p>
            </div>
        </div>
    )
}

export default About