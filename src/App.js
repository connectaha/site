import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import { hot } from 'react-hot-loader'
import theme from './theme';

//
import Routes from 'react-static-routes'

injectGlobal`
  body {
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  nav {
    width: 100%;
    background: #108db8;

    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }

  .content {
    padding: 1rem;
  }

  img {
    max-width: 100%;
  }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <AppStyles>
        <div className="content">
          <Routes />
        </div>
      </AppStyles>
    </Router>
  </ThemeProvider>
)

export default hot(module)(App)
