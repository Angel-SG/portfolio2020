import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container } from 'react-grid-system'
import Logo from '../images/web-logo.svg'

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <Container className="header-wrap" id="header-wrap">
      <div className="logo-wrap" style={{ display: "flex"}}>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            <img width="40" src={Logo} alt="Angel-Sg" />
          </Link>
      </div>
      <div className="nav-wrap">
            <nav>
              <ul style={{ display: "flex", flex: 1 }}>
                {menuLinks.map(link => (
                  <li
                    key={link.name}
                    style={{
                      listStyleType: `none`,
                      padding: `1rem`,
                    }}
                  >
                    <Link activeClassName="active" to={link.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="social-container">
              <ul>
                <li><a href="https://github.com/Angel-SG" target="_blank" rel="noopener noreferrer" title="github"><i className="fab fa-github-alt"></i></a></li>
                {/* <li><a href="www.google.com" target="_blank" title="codepen"><i className="fab fa-codepen"></i></a></li> */}
                <li><a href="https://www.linkedin.com/in/angel-sg/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
