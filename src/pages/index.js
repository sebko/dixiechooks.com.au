import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css, keyframes } from 'react-emotion'
import hero from '../img/hero.jpg'

const trippykeyframe = keyframes`
  from {
    filter: hue-rotate();
  }
  to {
    filter: hue-rotate(360deg);
  }
`
const Img = styled('img')`
  background-image: url(${hero});
  width: 100vw;
  height: 400px;
  position: relative;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  @media (min-width: 426px) {
    height: calc(100vh - 88px);
  }
`

const trippy = css`
  animation: ${trippykeyframe} 10s ease infinite;
`

export default class IndexPage extends React.Component {
  state = {
    isTrippy: false,
  }
  toggleTrippy = () => {
    this.setState(({ isTrippy }) => ({ isTrippy: !isTrippy }))
  }
  render() {
    return (
      <React.Fragment>
        <Img
          onClick={this.toggleTrippy}
          className={this.state.isTrippy && trippy}
        />
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Gigs</h1>
            </div>
            <a
              className="bit-widget-initializer"
              data-artist-name="The Dixie Chooks"
              data-display-local-dates="false"
              data-display-past-dates="true"
              data-auto-style="false"
              data-text-color="#000000"
              data-link-color="#E67A00"
              data-popup-background-color="#FFFFFF"
              data-background-color="#FFFFFF"
              data-display-limit="15"
              data-link-text-color="#FFFFFF"
            />
          </div>
        </section>
      </React.Fragment>
    )
  }
}
