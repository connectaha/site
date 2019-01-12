import React from 'react'
import styled from 'styled-components'
import { withRouteData } from 'react-static'
import { Box, Card, Image, Flex, Text, Heading } from 'rebass'
import shuffle from 'shuffle-array'

const Clickable = styled.div`
  cursor: pointer;
`

export default withRouteData(({ speakers }) =>
  (
    <div>
      <Heading pl={4} pt={6} pb={4} color="white">Speakers</Heading>
      <Flex flexWrap="wrap" p={32}>
        {
        speakers.map(speaker => (
          <Clickable key={speaker.id}>
            <Box width={280} height={440}>
              <Card
                m={16}
                p={2}
                width={[1, 1, 1 / 2]}
                borderRadius={8}
                boxShadow="0 0 16px rgba(0, 0, 0, .25)"
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
          </Clickable>)
        )
      }
      </Flex>
    </div>)
)
