import React from 'react'
import { withRouteData } from 'react-static'
import { Box, Flex, Image, Text } from 'rebass'
import styled from 'styled-components'

const RoundedImage = styled(Image)`
    border-radius: 50%;
`
export default withRouteData(({ speaker }) => (
  <Flex mx={[3, 4, 5]} flexWrap="wrap">
    <Box width={[1, 1 / 3]}>
      <RoundedImage src={speaker.photo} pt={4} mt={3} />
    </Box>
    <Box width={[1, 2 / 3]} px={5}>
      <Flex flexWrap="nowrap" alignItems="space-between">
        <Flex flexDirection="column">
          <Flex flexDirection="column">
            <Text fontSize={1} fontWeight={900} pt={4} pb={4}>Speaker</Text>
            <Text fontSize={5} pb={7}>{speaker.firstName} {speaker.lastName} / {speaker.organization}</Text>
            <Text fontSize={1} fontWeight={900} pb={4}>Session</Text>
            <Text fontSize={3} pb={2} >{speaker.title}</Text>
            <Text fontSize={[1, 2]} pb={7} fontWeight={300}>{speaker.description}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontSize={1} fontWeight={900} pb={4}>Bio</Text>
            <Text fontSize={[1, 2]} fontWeight={300}>{speaker.bio}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  </Flex>
))
