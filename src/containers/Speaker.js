import React from 'react'
import { withRouteData } from 'react-static'
import { Box, Button, Flex, Image, Text } from 'rebass'
import styled from 'styled-components'
import NavigateNext from 'rmdi/lib/NavigateNext'
import NavigateBefore from 'rmdi/lib/NavigateBefore'

const RoundedImage = styled(Image)`
  border-radius: 50%;
`

const RoundedButton = styled(Button)`
  cursor: pointer;
  border-radius: 50%;
`

const TextBlock = styled(Text)`
  white-space: pre-line;
`

export default withRouteData(({ speaker, nextId, previousId }) => {
  const org = speaker.organization ? `/ ${speaker.organization}` : ''

  return (
    <Flex mx={[3, 4, 5]} flexWrap="wrap">
      <Box width={[1, 1 / 3]}>
        <RoundedImage src={speaker.photo} pt={4} mt={3} />
      </Box>
      <Box width={[1, 2 / 3]} px={5}>
        <Flex flexWrap="nowrap" alignItems="space-between">
          <Flex flexDirection="column">
            <Flex flexDirection="column">
              <Text fontSize={1} fontWeight={900} pt={4} pb={4}>Speaker</Text>
              <Text fontSize={5} pb={7}>{speaker.firstName} {speaker.lastName} {org}</Text>
              <Text fontSize={1} fontWeight={900} pb={4}>Session</Text>
              <Text fontSize={3} pb={2} >{speaker.title}</Text>
              <TextBlock fontSize={[1, 2]} pb={7} fontWeight={300}>{speaker.description}</TextBlock>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize={1} fontWeight={900} pb={4}>Bio</Text>
              <TextBlock fontSize={[1, 2]} pb={6} fontWeight={300}>{speaker.bio}</TextBlock>
            </Flex>
          </Flex>
        </Flex>
        <Flex alignItems="space-between">
          <RoundedButton fontSize={3} p={5} bg="transparent" color="light" mr={4} onClick={() => { window.location = `/speakers/${previousId}` }}>
            <NavigateBefore size={32} />
          </RoundedButton>
          <RoundedButton fontSize={3} p={5} bg="transparent" color="light" ml="auto" onClick={() => { window.location = `/speakers/${nextId}` }}>
            <NavigateNext size={32} />
          </RoundedButton>
        </Flex>
      </Box>
    </Flex>
  )
}
)
