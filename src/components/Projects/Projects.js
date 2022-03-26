import React from 'react'
import "./Projects.css"
import p1 from "../../images/p1.jpg"
import p2 from "../../images/p2.jpg"
import p3 from "../../images/p3.jpg"
import p4 from "../../images/p4.jpg"
import p5 from "../../images/p5.jpg"
import p6 from "../../images/p6.jpg"

function Projects() {
    return (
        <div className="project component__space" id="projects">
            <div className="heading">
                <h1>My Projects</h1>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col__3" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={p1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Portfolio</h5>
                                <h4 className="project__text">Made my portfolio using react</h4>
                                <a href="https://github.com/Ausaf1/ausafahmad" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={p2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Social Media</h5>
                                <h4 className="project__text">Currently working on this project using express and Mongodb</h4>
                                <a href="https://github.com/Ausaf1/connectIn" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={p3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Notes Web App</h5>
                                <h4 className="project__text">Made using Vanilla javascript</h4>
                                <a href="https://github.com/Ausaf1/sticky_notes" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1000">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={p4} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">5 digit up counter</h5>
                                <h4 className="project__text">Made using javascript</h4>
                                <a href="https://github.com/Ausaf1/FiveDigit_UpCounter" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1000">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={p5} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Weather Report</h5>
                                <h4 className="project__text">Made using Python</h4>
                                <a href="https://github.com/Ausaf1/WeatherReport" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1000">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={p6} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Student database</h5>
                                <h4 className="project__text">Made using file handling in c</h4>
                                <a href="https://github.com/Ausaf1/File-Handling-Database-" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                        <a href='https://github.com/Ausaf1' className="view__more pointer btn">View more</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects