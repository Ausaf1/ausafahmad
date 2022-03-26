import React from 'react'
import "./Footer.css"
import insta from '../../images/instagram.png'
import github from '../../images/github.png'
import linkedIn from '../../images/linkedin.png'
import facebook from '../../images/facebook.png'

function Footer() {
    return (
        <div className='Footer'>
            <div className="footer__rights">
                <p className="footer__name">
                    <span>Ausaf</span> Ahmad
                </p>
                <p className="footer__copyRights">@ All Rights Reserved</p>
            </div>
            <div className="footer__socials">
                <a href="https://www.instagram.com/ausaf62/">
                    <img src={insta} alt="Insta" className="footer__social__icons" />
                </a>
                <a href="https://github.com/Ausaf1">
                    <img src={github} alt="github" className="footer__social__icons" />
                </a>
                <a href="https://www.linkedin.com/in/ausaf-ahmad-300473203/">
                    <img src={linkedIn} alt="linkedIn" className="footer__social__icons" />
                </a>
                <a href="https://www.facebook.com/ausaf.ahmad.7771">
                    <img src={facebook} alt="facebook" className="footer__social__icons" />
                </a>
            </div>
        </div>
    )
}

export default Footer