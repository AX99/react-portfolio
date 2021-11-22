import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋🏾
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Freelance Developer,"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "Programmer"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "& Tech Enthusiast"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
            <button className="primary-btn" onClick={() => scrollTo("#about")} onKeyDown={() => scrollTo("#about")}>Find Out More</button>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
