import React from "react"
import "./Home.css"
import coverVideo from "../../images/homebg.mp4"

function Home() {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h2 data-aos="fade-right" data-aos-delay="500">Ausaf Ahmad</h2>
            <p data-aos="fade-left" data-aos-delay="1000">Developer | Inquisitive Learner | DSA Enthusiast </p>
        </div>
    )
}

export default Home