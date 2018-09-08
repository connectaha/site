import React, { Component } from 'react'
import { post } from 'axios'
import styled from 'styled-components'
import { color, fontSize, space, width } from 'styled-system'
import { Link } from 'rebass'
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
  py: 4,
}

const Text = styled.div`
`

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
      <Center mt={5} mx={[4, 5, 6, 7]}>
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
          <Text>Early bird tickets are now <Link href='https://www.papercall.io/connectaha' children='on sale' color='primary'/> for $150</Text>
        </Row>

        <Row width={[1, 0.75, 0.5]}>
          <Text>Interested in speaking? The <Link href='https://www.papercall.io/connectaha' children='CFP is open' color='primary'/> and we'd love to see your submissions.</Text>
        </Row>
      </Center>
      <ButterToast />
    </div>)
  }
}
