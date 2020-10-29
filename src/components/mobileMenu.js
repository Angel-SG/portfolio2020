import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"



const MobileMenu = ({ menuLinks }) => (
	<div>
    <Menu pageWrapId={"header-wrap"}>
			<div className="nav-wrap">
        <ul>
          {menuLinks.map(link => (
          	<li
              key={link.name}
              style={{
                listStyleType: `none`,
                padding: `1rem`,
              }}
              >
              <Link activeClassName="active" className="menu-item" to={link.link}>
                {link.name}
              </Link>
            </li>
            ))}
          </ul>
      </div>
		</Menu>
  </div>
)

export default MobileMenu;


