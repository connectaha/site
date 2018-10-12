import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import { Image, NavLink, Toolbar, Provider as ThemeProvider } from 'rebass'
import Icon from 'react-simple-icons'
import Routes from 'react-static-routes'
import theme from './theme'
import logo from './connectaha_r_400.svg'
//


const Clickable = styled.div`
  cursor: pointer;
`

injectGlobal`
  body {
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    font-size: 16px;
    margin: 0;
    padding: 0;
    background-color: #0d1d42;
    color: white;
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
          <Toolbar color="white" bg="darkblue" ml={4} mr={4}>
            <NavLink to="/speakers" is={Link} ml="auto" children="Speakers" />
            <NavLink to="https://papercall.io/connectaha" is={Link} children="Submit a Talk" />
            <NavLink to="/details" is={Link} children="Details" />
            <NavLink to="https://twitter.com/connectaha" is={Link}>
              <Icon name="twitter" />
            </NavLink>
            <NavLink to="https://www.facebook.com/connectaha/" is={Link}>
              <Icon name="facebook" />
            </NavLink>
          </Toolbar>
          <center>
            <Clickable>
              <Image mt={5} mb={32} mx={[4, 5, 6, 7]} src={logo} onClick={() => { window.location = '/' }} alt="Connectaha Logo" width={[1, 0.75, 0.5]} height="131" />
            </Clickable>
          </center>
          <Routes />
        </div>
      </AppStyles>
    </Router>
  </ThemeProvider>
)

export default hot(module)(App)
