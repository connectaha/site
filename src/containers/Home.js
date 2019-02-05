import React, { Component } from 'react'
import { Head } from 'react-static'
import { post } from 'axios'
import styled from 'styled-components'
import { fontSize, space, width } from 'styled-system'
import { Button, Banner, Flex, Text, Heading } from 'rebass'
import ButterToast, { CinnamonSugar } from 'butter-toast'
import BannerImage from './presenter.jpg'

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
    window.location = 'https://www.eventbrite.com/e/connectaha-conference-2019-tickets-49878979370'
  };

  goToCfp = () => {
    window.location = 'https://papercall.io/connectaha'
  };


  render () {
    return (
      <div>
        <Head>
          <meta property="og:title" content="2019 Connectaha Conference" />
          <meta property="og:url" content="https://www.connectaha.com" />
          <meta property="og:description" content="March 8, 2019 Walter Scott Conference Center" />
          <meta property="og:image" content="https://connectaha.com/static/presenter.1286b8ef.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="2019 Connectaha Conference" />
          <meta name="twitter:image:alt" content="March 8, 2019 Walter Scott Conference Center" />
        </Head>

        <Banner mt={5} mb={5} color="white" minHeight="40vh" borderRadius={8} backgroundImage={BannerImage}>
          <Heading fontSize={5}>March 8, 2019</Heading>
          <Heading fontSize={3}>Walter Scott Conference Center</Heading>
          <Heading fontSize={3}>6450 Pine St. Omaha, NE 68106</Heading>
        </Banner>

        <Center mt={3} mb={3} mx={[7, 6, 5, 4]}>
          <Row width={[1, 0.75, 0.65]}>
            <Text fontSize={3} fontWeight={300} >A new conference is coming to Omaha.
              A conference that believes that everyone in the software world can learn
              from each other. A conference that believes quality software only happens
              when everyone on the team is communicating. A conference that believes
              those with less experience provide just as much value as the most senior
              team member.
            </Text>
          </Row>
          <Row width={[1, 0.75, 0.65]}>
            <Text fontSize={3} fontWeight={300} >
              A conference that believes there’s power when people talk.
            </Text>
          </Row>

          <Row width={[1, 0.75, 0.5]}>
            <Flex wrap="wrap">
              <BigButton bg="action" color="white" border="none" onClick={this.goToTickets}>Buy Tickets</BigButton>
            </Flex>
          </Row>
        </Center>
      </div>)
  }
}
