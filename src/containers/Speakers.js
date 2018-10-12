import React from 'react'
import styled from 'styled-components'
import { withRouteData } from 'react-static'
import {
  Box,
  Card,
  Image,
  Flex,
  Text,
} from 'rebass'
import logo from '../connectaha_r_400.svg'

const Clickable = styled.div`
  cursor: pointer;
`

export default withRouteData(({ speakers }) => (
  <div>
    <center>
      <Clickable>
        <Image mt={5} mb={32} mx={[4, 5, 6, 7]} src={logo} onClick={() => { window.location = '/' }} alt="Connectaha Logo" width={[1, 0.75, 0.5]} height="131" />
      </Clickable>
    </center>
    <Flex flexWrap="wrap" flexFlow="rowwrap" p={32}>
      {
        speakers.map(speaker => (
          <Clickable>
            <Box width={256} height={400}>
              <Card
                m={16}
                p={2}
                width={[1, 1, 1 / 2]}
                borderRadius={8}
                boxShadow="0 0 16px rgba(0, 0, 0, .25)"
                Flex
                onClick={() => { window.location = `/speakers/${speaker.id}` }}>
                <Image src={speaker.photo} />
                <Box px={2}>
                  <Text color="black" fontSize={4}>
                    {speaker.firstName}
                  </Text>
                  <Text color="black" fontSize={4}>
                    {speaker.lastName}
                  </Text>
                </Box>
              </Card>
            </Box>
          </Clickable>))
      }
    </Flex>
  </div>))
