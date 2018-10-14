import React, { Component } from 'react'
import { post } from 'axios'
import styled from 'styled-components'
import { fontSize, space, width } from 'styled-system'
import { Button, Flex, Text } from 'rebass'
import ButterToast, { CinnamonSugar } from 'butter-toast'

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
    return (<div>
      <Center mt={5} mb={5} mx={[4, 5, 6, 7]}>
        <Row width={[1, 0.75, 0.5]}>
          <Text fontSize={3} fontWeight={300} >A new conference is coming to Omaha. A conference that believes
           that everyone in the software world can learn from each other. A conference
           that believes quality software only happens when everyone on the team is
           communicating. A conference that believes those with less experience provide
          just as much value as the most senior team member.
          </Text>
        </Row>
        <Row width={[1, 0.75, 0.5]}>
          <Text fontSize={3} fontWeight={300} >
            A conference that believes there’s power when people talk.
          </Text>
        </Row>

        <Row width={[1, 0.75, 0.5]}>
          <Flex wrap="wrap">
            <BigButton children="Get a Ticket" onClick={this.goToTickets} />
          </Flex>
        </Row>
      </Center>
      <ButterToast />
    </div>)
  }
}
