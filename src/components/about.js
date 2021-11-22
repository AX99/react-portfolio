import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Skills from "../components/skills"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
              <br></br>
              <br></br>
            </p>
            <Fade bottom cascade>
              <br></br>
              <br></br>
              <div className="cnctbutton">
                <a
                  href={`mailto:${
                    data.contactEmail ? data.contactEmail : "rapha.mensah@gmail.com"
                  }`}
                  className="primary-btn"
                >
                  CONNECT WITH ME
                </a>
              </div>
              <br></br>
              <br></br>
              <div className="cnctbutton">
                <a
                  href={data.cvFile ? data.cvFile : "../Raphael_Ako-Mensah_CV.pdf"}
                  rel="noopener noreferrer"
                  className="primary-btn"
                  target="_blank"
                  download
                >
                  Download CV
                </a>
              </div>
            </Fade>
            <Skills></Skills>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
