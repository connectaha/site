import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import { Image, NavLink, Provider as ThemeProvider } from 'rebass'
import Icon from 'react-simple-icons'
import Routes from 'react-static-routes'
import theme from './theme'
import logo from './connectahaLogo.svg'

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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width:1200px;
  margin: 0 auto;


  img {
    max-width: 100%;
  }
`
const FileLink = styled.a`
   color: white;
   text-decoration: none;
   cursor: pointer;
`

const AppHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: Center;
  flex-wrap: wrap;
  padding: 10px;
  border-bottom: 1px solid #174899;

  > img {
    margin: 0;
    min-width: none;
    width: auto;
    cursor: pointer;
  }
`

const AppFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: auto;
  border-top: 1px solid #174899;
`


const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <AppStyles>
        <AppHeader>
          <Image py={5} my={5} mx={[1, 2, 3, 4]} src={logo} onClick={() => { window.location = '/' }} alt="Connectaha Logo" width={[2, 1, 0.5]} />
        </AppHeader>
        <div>
          <Routes />
        </div>
        <AppFooter>
          <div>
            <p>Copyright © Connectaha, LLC. All rights reserved.</p>
          </div>
          <div>
            <NavLink to="https://twitter.com/connectaha" is={Link}>
              <Icon ml={4}name="twitter" />
            </NavLink>
            <NavLink to="https://www.facebook.com/connectaha/" is={Link}>
              <Icon name="facebook" />
            </NavLink>
          </div>
        </AppFooter>
      </AppStyles>
    </Router>
  </ThemeProvider>
)

export default hot(module)(App)
