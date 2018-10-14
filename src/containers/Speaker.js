import React from 'react'
import { withRouteData } from 'react-static'
import { Box, Flex, Image, Text } from 'rebass'

export default withRouteData(({ speaker }) => (
  <Box mb={8} p={4}>
    <Flex flexWrap="nowrap" alignItems="space-between">
      <Image src={speaker.photo} />
      <Flex flexDirection="column" px={4}>
        <Flex flexDirection="column">
          <h1>{speaker.title}</h1>
          <Text fontSize={[2, 3]} pb={3}>{speaker.description}</Text>
        </Flex>
      </Flex>
    </Flex>
    <Flex flexDirection="column">
      <h1>{speaker.firstName} {speaker.lastName}</h1>
      <Text fontSize={[2, 3]}>{speaker.bio}</Text>
    </Flex>
  </Box>
))
