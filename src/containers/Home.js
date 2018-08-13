import React, { Component } from 'react'
import { post } from 'axios'
import { withSiteData } from 'react-static'
import styled from 'styled-components'
import { fontSize, space, width } from 'styled-system'

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
  margin: 15%;
  color: #58595b;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  text-align: center;
  ${fontSize};
  ${space};
  ${width};
`

Row.defaultProps = {
  fontSize: 4,
  justifyContent: 'space-around',
  py: 3,
}

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
        <h1>Connectaha</h1>
        <Row>A new conference is coming to Omaha. A conference that believes
           that everyone in the software world can learn from each other. A conference
           that believes quality software only happens when everyone on the team is
           communicating. A conference that believes those with less experience provide
          just as much value as the most senior team member.
        </Row>
        <Row>A conference that believes there’s power when people talk.</Row>
        <Row>If you’d like to be kept in the know about this conference, sign up below.</Row>
        <Row width={0.5}>
          <Input type="text" value={this.state.email} onChange={this.onChange} />
          <Button type="button" ml={2} p={2} onClick={this.save}>Notify Me</Button>
        </Row>
      </Center>
    </div>)
  }
}
