import React from 'react'
import "./Skills.css"
import html from "../../images/html5.png"
import css from "../../images/css3.png"
import javascript from "../../images/js.png"
import reactjs from "../../images/react.png"
import nodejs from "../../images/nodejs.png"
import mongo from "../../images/mongo.jpg"
import c from "../../images/c.png"
import cpp from "../../images/cpp.png"
import java from "../../images/java.png"
import python from "../../images/python.png"
import mysql from "../../images/mysql.png"
import git from "../../images/git.png"
import firebase from "../../images/firebase.png"
import cloud from "../../images/cloud.png"
import dialogflow from "../../images/dialogflow.png"

function Skills() {
    return (
        <div className='inner' id='skills'>
            <div className="header">
                <h1>My Skills</h1>
            </div>
            <div className="container">
                <div className="skill-box" data-aos="fade-right" data-aos-delay="500">
                    <div className="skill-title">
                        <div className="img">
                            <img src={html} alt="" className='skill-icon' />
                        </div>
                        <h3>HTML 5</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="500">
                    <div className="skill-title">
                        <div className="img">
                            <img src={css} alt="" className='skill-icon' />
                        </div>
                        <h3>CSS 3</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="600">
                    <div className="skill-title">
                        <div className="img">
                            <img src={javascript} alt="" className='skill-icon' />
                        </div>
                        <h3>JavaScript</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="600">
                    <div className="skill-title">
                        <div className="img">
                            <img src={nodejs} alt="" className='skill-icon' />
                        </div>
                        <h3>Nodejs</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="700">
                    <div className="skill-title">
                        <div className="img">
                            <img src={reactjs} alt="" className='skill-icon' />
                        </div>
                        <h3>Reactjs</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="800">
                    <div className="skill-title">
                        <div className="img">
                            <img src={c} alt="" className='skill-icon' />
                        </div>
                        <h3>C</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="800">
                    <div className="skill-title">
                        <div className="img">
                            <img src={cpp} alt="" className='skill-icon' />
                        </div>
                        <h3>C++</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="900">
                    <div className="skill-title">
                        <div className="img">
                            <img src={java} alt="" className='skill-icon' />
                        </div>
                        <h3>Java</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="900">
                    <div className="skill-title">
                        <div className="img">
                            <img src={python} alt="" className='skill-icon' />
                        </div>
                        <h3>Python</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="900">
                    <div className="skill-title">
                        <div className="img">
                            <img src={mongo} alt="" className='skill-icon' />
                        </div>
                        <h3>MongoDB</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="1000">
                    <div className="skill-title">
                        <div className="img">
                            <img src={mysql} alt="" className='skill-icon' />
                        </div>
                        <h3>MySQL</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="1000">
                    <div className="skill-title">
                        <div className="img">
                            <img src={git} alt="" className='skill-icon' />
                        </div>
                        <h3>Git</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="1000">
                    <div className="skill-title">
                        <div className="img">
                            <img src={firebase} alt="" className='skill-icon' />
                        </div>
                        <h3>Firebase</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="1000">
                    <div className="skill-title">
                        <div className="img">
                            <img src={cloud} alt="" className='skill-icon' />
                        </div>
                        <h3>Google Cloud</h3>
                    </div>
                </div>
                <div className="skill-box" data-aos="fade-right" data-aos-delay="1000">
                    <div className="skill-title">
                        <div className="img">
                            <img src={dialogflow} alt="" className='skill-icon' />
                        </div>
                        <h3>Dialogflow</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills