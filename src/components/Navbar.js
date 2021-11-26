import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import logo from "../images/logo.png"


const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            onKeyDown={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            <button>
              <img src={logo} alt="logo" />
            </button>
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")} onKeyDown={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#work")} onKeyDown={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#contact")} onKeyDown={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
