import './all.sass'

import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import Navbar from '../components/Navbar'
import theme from '../constants/theme'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Dixie Chooks">
      <script
        charset="utf-8"
        src="https://widget.bandsintown.com/main.min.js"
      />
    </Helmet>
    <Navbar />
    <ThemeProvider theme={theme}>
      <div>{children()}</div>
    </ThemeProvider>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
