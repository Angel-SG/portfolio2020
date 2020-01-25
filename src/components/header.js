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
