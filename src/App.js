import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import { NavLink, Toolbar } from 'rebass'
import theme from './theme';
import { Provider as ThemeProvider } from 'rebass';

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
  img {
    max-width: 100%;
  }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <AppStyles>
        <div className="content">
          <Toolbar color='white' bg='gray'>
            <NavLink to='/' is={Link} children='Connectaha' />
            <NavLink to='/details' ml='auto' is={Link} children='Event Details' />
            {/* <NavLink to='/sponsorship' is={Link} children='Sponsorship' /> */}
          </Toolbar>
          <Routes />
        </div>
      </AppStyles>
    </Router>
  </ThemeProvider>
)

export default hot(module)(App)
