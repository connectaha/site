import React, { Component } from 'react'
import { post } from 'axios'
import { withSiteData } from 'react-static'
import styled from 'styled-components'
import { color, flexbox, fontSize, space, width } from 'styled-system'
import logo from '../logo_tag_425.png';

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
  margin: 15%;
  color: ${props => props.theme.colors.dark};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  ${flexbox};
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
  text-align: center;
`;

const Input = styled.input`
  border: solid .0625rem black;
  border-radius: 4px;
  color: black;
  vertical-align: middle;
  flex-grow: 1;
  outline: none;
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

  save = () => {
    const { email } = this.state

    post('https://sqc5wucuwc.execute-api.us-east-2.amazonaws.com/prod/save', {
      email,
    }).then(() => {
      this.setState({ email: '' })
    }).catch(() => {
      this.setState({ email: '' })
    })
  }

  render () {
    return (<div>
      <Center>
        <img src={logo} alt='Connectaha Logo' />
        <Row><Text>A new conference is coming to Omaha. A conference that believes
           that everyone in the software world can learn from each other. A conference
           that believes quality software only happens when everyone on the team is
           communicating. A conference that believes those with less experience provide
          just as much value as the most senior team member.</Text>
        </Row>
        <Row><Text>A conference that believes there’s power when people talk.</Text></Row>
        <Row><Text>If you’d like to be kept in the know about this conference, sign up below.</Text></Row>
        <Row flexWrap='wrap'>
          <Input type="text" value={this.state.email} onChange={this.onChange} />
          <Button bg='primary' color='white' type="button" ml={[0, 2]} p={[0, 2]} onClick={this.save}>Notify Me</Button>
        </Row>
      </Center>
    </div>)
  }
}
