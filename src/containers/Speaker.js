import React from 'react'
import { withRouteData } from 'react-static'
import { Box, Flex, Image, Text } from 'rebass'

export default withRouteData(({ speaker }) => (
  <Flex mx={[3, 4, 5]} flexWrap="wrap">
    <Box width={[1, 1 / 3]}>
      <Image src={speaker.photo} mt={3} />
    </Box>
    <Box width={[1, 2 / 3]}>
      <Flex flexWrap="nowrap" alignItems="space-between">
        <Flex flexDirection="column">
          <Flex flexDirection="column">
            <Text fontSize={5} pb={3} >{speaker.title}</Text>
            <Text fontSize={[2, 3]} pb={3}>{speaker.description}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontSize={5} pb={3}>{speaker.firstName} {speaker.lastName}</Text>
            <Text fontSize={[2, 3]}>{speaker.bio}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  </Flex>
))
