import React, { Component } from 'react'
import { post } from 'axios'
import { withSiteData } from 'react-static'
import styled from 'styled-components'
import { color, fontSize, space, width } from 'styled-system'
import { Flex } from 'rebass'
import logo from '../logo_tag_400.svg'
import ButterToast, { CinnamonSugar } from 'butter-toast'

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
  color: ${props => props.theme.colors.dark};
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
  py: 3,
}

const Text = styled.div`
`

const Input = styled.input`
  border: solid .0625rem black;
  border-radius: 4px;
  color: black;
  vertical-align: middle;
  outline: none;
  flex-grow: 1;
  ${fontSize};
  ${space};
  ${width};
`

Input.defaultProps = {
  fontSize: 4,
  linHeight: 4,
}

const Button = styled.button`
  outline: none;
  background-clip: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  ${space};
  ${fontSize};
  ${color};
`
Button.defaultProps = {
  fontSize: 4,
}

const Image = styled.img`
  ${width};
`

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

  render () {
    return (<div>
      <Center mt={4} mx={[3, 4, 5, 6]}>
        <Image src={logo} alt="Connectaha Logo" width={[1, 0.75, 0.5]} height="131" />
        <Row width={[1, 0.75, 0.5]}>
          <Text>A new conference is coming to Omaha. A conference that believes
           that everyone in the software world can learn from each other. A conference
           that believes quality software only happens when everyone on the team is
           communicating. A conference that believes those with less experience provide
          just as much value as the most senior team member.
          </Text>
        </Row>
        <Row width={[1, 0.75, 0.5]}>
          <Text>
            A conference that believes there’s power when people talk.
          </Text>
        </Row>
        <Row width={[1, 0.75, 0.5]}>
          <Text>If you’d like to be kept in the know about this conference, sign up below.</Text>
        </Row>
        <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-around" width={[1, 0.75, 0.5]}>
          <Input mb={2} type="text" value={this.state.email} onChange={this.onChange} />
          <Button mb={2} bg="primary" color="white" type="button" ml={[0, 2]} p={3} onClick={this.save}>Notify Me</Button>
        </Flex>

        <Row width={[1, 0.75, 0.5]}>
          <Text>Interested in speaking? The CFP will open September 3, 2018</Text>
        </Row>
      </Center>
      <ButterToast />
    </div>)
  }
}
