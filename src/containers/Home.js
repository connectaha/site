/* eslint-disable max-len */
import React, { Component } from 'react'
import { Head } from 'react-static'
import { post } from 'axios'
import styled from 'styled-components'
import { fontSize, space, width } from 'styled-system'
import { Button, Banner, Text, Heading } from 'rebass'
import ButterToast, { CinnamonSugar } from 'butter-toast'
import BannerImage from '../confbanner.jpg'

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
  color: ${props => props.theme.colors.white};
  ${space};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  ${fontSize};
  ${space};
  ${width};
  > a {
    color: #ff6600;
    cursor: pointer;
  }
`

Row.defaultProps = {
  fontSize: 4,
  justifyContent: 'space-around',
  py: 4,
}

const BigButton = styled(Button)`
  flex-grow: 1;
`

BigButton.defaultProps = {
  fontSize: 4,
  px: 5,
  py: 5,
  bg: 'light',
  color: 'primary',
}

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
    }
  }

  onChange = event => {
    this.setState({ email: event.target.value })
  }

  showToast = () => {
    const toast = CinnamonSugar.crunch({
      theme: 'green',
      message: 'Thanks! There will be more info in the coming days.',
      toastTimeout: 10000,
    })
    ButterToast.raise(toast)
  }

  save = () => {
    const { email } = this.state

    post('https://sqc5wucuwc.execute-api.us-east-2.amazonaws.com/prod/save', {
      email,
    }).then(() => {
      this.showToast()
      this.setState({ email: '' })
    }).catch(() => {
      this.showToast()
      this.setState({ email: '' })
    })
  }

  goToTickets = () => {
    window.location = 'https://www.eventbrite.com/e/connectaha-technology-conference-tickets-71091044227?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=listing'
  };

  goToCfp = () => {
    window.location = 'https://papercall.io/connectaha'
  };


  render () {
    return (
      <div>
        <Head>
          <meta property="og:title" content="2020 Connectaha Schedule" />
          <meta property="og:url" content="https://www.connectaha.com/schedule" />
          <meta property="og:description" content="March 27, 2020 Walter Scott Conference Center" />
          <meta property="og:image" content="https://connectaha.com/static/ConfImage.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="2020 Connectaha Conference" />
          <meta name="twitter:image:alt" content="March 27, 2020 Walter Scott Conference Center" />
        </Head>

        <Center mt={3} mb={3} mx={4} px={3}>
          <Row width={[1, 0.95, 0.85]}>
            <Text fontFamily="BarlowCondensed-lightItalic" fontSize={[4, 5, 6]}>
                A technical conference that believes there is power when people talk.
            </Text>
          </Row>
        </Center>

        <Banner mt={5} mb={5} color="white" minHeight="40vh" borderRadius={8} backgroundImage={BannerImage}>
          <Heading fontSize={3}>SAVE THE DATE</Heading>
          <Heading fontSize={5}>March 27, 2020</Heading>
          <Heading fontSize={3}>Walter Scott Conference Center</Heading>
        </Banner>

        <Center mt={3} mb={3} mx={[7, 6, 5, 4]}>
          <Row width={[1, 0.95, 0.85]}>
            <Text fontSize={[2, 3, 4]} fontWeight={300} >
              From the outset, Connectaha was designed to connect tech people in and around Nebraska.
              We believe that we have a lot of interesting work right here in our own backyard, and we want to expose what’s going on.
            </Text>
          </Row>
        </Center>
      </div>)
  }
}
