import React, { Component } from 'react'
import { post } from 'axios'
import styled from 'styled-components'
import logo from '../connectaha_r_400.svg'
import { withRouteData, Link } from 'react-static'
import { color, fontSize, space, width } from 'styled-system'
import {
  Box,
  Button,
  Card,
  Heading,
  Flex,
} from 'rebass'

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

const Text = styled.div`
`
const Image = styled.img`
  ${width};
`

export default withRouteData(({ speakers }) => (
  <div>
    <center>
      <Image mt={5} mb={32} mx={[4, 5, 6, 7]} src={logo} alt="Connectaha Logo" width={[1, 0.75, 0.5]} height="131" />
    </center>
    <Flex flexWrap="wrap" flexFlow="rowwrap" p="32">
      {speakers.map(speaker => (
          <div>
            <Box width={256} height={400}>
              <Card
                m={16}
                p={2}
                width={[1, 1, 1/2]}
                borderRadius={8}
                boxShadow="0 0 16px rgba(0, 0, 0, .25)"
                Flex>
                <Image src={speaker.photo} />
                <Box px={2}>
                  <Heading as="h3">
                    <div>{speaker.name}</div>
                  </Heading>
                  <Text fontSize={2}>
                    {speaker.title}
                  </Text>
                  <Text fontSize={0}>
                    <Link to={`/speakers/${speaker.id}/`}>More...</Link>
                  </Text>
                </Box>
              </Card>
            </Box>
          </div>))}
    </Flex>
  </div>))
