import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import { Header, Image, Button, Flex, NavLink, Toolbar, Provider as ThemeProvider } from 'rebass'
import Icon from 'react-simple-icons'
import Routes from 'react-static-routes'
import theme from './theme'
import logo from './logo_300.svg'

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

const AppHeader = styled.div`
  border-bottom: solid 1px #467abe;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;

  > img {
    margin: 0;
    min-width: none;
    width: auto;
  }

  Header-right {
    margin: 0;
    flex: 0 0 auto;
    padding: 0 0 0 20px;
  }
`
const AppFooter = styled.div`
  border-top: solid 1px #467abe;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
`


const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <AppStyles>
        <AppHeader>
          <Image pb={5} pt={5} mt={5} mb={32} mx={[1, 2, 3, 4]} src={logo} onClick={() => { window.location = '/' }} alt="Connectaha Logo" width={[0.5, 0.4, 0.3]} height="100" />
          <Header-right flexWrap="wrap" flexFlow="rowwrap">
            <NavLink ml={4} to="/speakers" is={Link} children="Speakers" />
            <NavLink ml={4} to="/sponsors" is={Link} children="Sponsorship" />
            <NavLink ml={4} to="https://www.eventbrite.com/e/connectaha-conference-2019-tickets-49878979370" is={Link}>
              <Button bg="light" color="primary">Buy Tickets</Button>
            </NavLink>
          </Header-right>
        </AppHeader>
        <Routes />
        <AppFooter>
          <AppFooter-left>
            <NavLink to="https://twitter.com/connectaha" is={Link}>
              <Icon ml={4}name="twitter" />
            </NavLink>
            <NavLink to="https://www.facebook.com/connectaha/" is={Link}>
              <Icon name="facebook" />
            </NavLink>
            <NavLink ml={4} to="/details" is={Link} children="About" />
          </AppFooter-left>
          <AppFooter-right>
            <p>Copyright © Connectaha, LLC. All rights reserved.</p>
          </AppFooter-right>
        </AppFooter>
      </AppStyles>
    </Router>
  </ThemeProvider>
)

export default hot(module)(App)
