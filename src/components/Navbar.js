import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Dixie Chooks
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
