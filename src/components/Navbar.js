import { css } from 'emotion'
import Link from 'gatsby-link'
import React from 'react'
import FacebookIcon from '!svg-react-loader!../img/svg-icons/facebook.svg?name=FacebookIcon'
import InstagramIcon from '!svg-react-loader!../img/svg-icons/instagram.svg?name=TwitterIcon'

const header = css`
  @media (max-width: 769px) {
    margin-left: 0;
    margin-right: 0;
    display: flex !important;
    flex-direction: column;
    > div:nth-child(2) {
      order: -1;
      padding-bottom: 0;
    }
    > div:last-child {
      padding-bottom: 1.75rem;
    }
  }
`
const logo = css`
  font-family: 'Reenie Beanie', sans-serif;
`

const icon = css`
  svg:hover {
    fill: hsla(15, 80%, 45%, 1);
  }
`

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className={`container`}>
      <div
        className={`columns ${header}`}
        style={{ alignItems: 'center', width: '100%' }}
      >
        <div className="column">
          <Link to="/" className="navbar-item has-text-weight-bold is-size-5">
            Home
          </Link>
        </div>
        <div className="column">
          <Link
            to="/"
            className={`navbar-item ${logo} is-size-1`}
            style={{
              justifyContent: 'center',
            }}
          >
            Dixie Chooks
          </Link>
        </div>
        <div className="column">
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a
              href="https://www.facebook.com/DixieChooks/"
              target="_blank"
              style={{
                justifyContent: 'flex-end',
                display: 'flex',
                alignItems: 'center',
              }}
              className={`navbar-item ${icon}`}
            >
              <FacebookIcon style={{ width: 40, height: 40 }} />
            </a>

            <a
              href="https://www.facebook.com/DixieChooks/"
              target="_blank"
              style={{
                justifyContent: 'flex-end',
                display: 'flex',
                alignItems: 'center',
              }}
              className={`navbar-item ${icon}`}
            >
              <InstagramIcon style={{ width: 30, height: 30 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
