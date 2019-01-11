import React from 'react'
import styled from 'styled-components'
import { withRouteData } from 'react-static'
import { Box, Row, Column, Image, Flex, Text, Divider, Heading } from 'rebass'
import logo from '../connectaha_r_400.svg'
import Schedule from './Schedule'

const Clickable = styled.div`
  cursor: pointer;
`

export default withRouteData(({ speakers }) => (
  <div>
    <Heading pl={4} pt={6} pb={4} color="white">Schedule</Heading>
    <Flex flexWrap="wrap" p={4} my={4} color="white">
      <Box width={[1, 1/8]}>
      Schedule
      </Box>
      <Box width={[1, 1/8]} >
        Time
      </Box>
      <Box width={[1, 1/8]} >
        Center Room
      </Box>
      <Box width={[1, 1/8]} >
        Southwest Room
      </Box>
      <Box
        width={[1, 1/8]} >
        Northwest Room
      </Box>
      <Box
        width={[1, 1/8]} >
        Exec Boardroom
      </Box>
      <Box
        width={[1, 1/8]} >
        Northeast Room
      </Box>
      <Box
        width={[1, 1/8]} >
        Southeast Room
      </Box>
    </Flex>

    <Flex flexWrap="wrap" px={4} py={5} my={4} color="darkblue" bg="white">
      <Box
        width={[1, 1/8]}>
        Opening Keynote
      </Box>
      <Box
        width={[1, 1/8]} >
        8:00a - 8:25a
      </Box>
      <Box
        width={[1, 3/4]} >
        Jonathan Mills
      </Box>
    </Flex>

    <Flex flexWrap="wrap" p={4} my={4} color="darkblue" bg="white">
      <Box
        width={[1, 1/8]} >
        Session 1
      </Box>
      <Box width={[1, 1/8]}>
        8:30a - 9:30a
      </Box>
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]}>
        A1
      </Box>
      <Box width={[1, 1/8]}>
        A2
      </Box>
      <Box width={[1, 1/8]}>
        A3
      </Box>
      <Box width={[1, 1/8]}>
        A4
      </Box>
      <Box width={[1, 1/8]}>
        A5
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box
        width={[1, 1/8]}>
        Break
      </Box>
      <Box width={[1, 7/8]}>
        9:30a - 9:45a
      </Box>
    </Flex>

    <Flex flexWrap="wrap" p={4} my={4} color="darkblue" bg="white">
      <Box width={[1, 1/8]} >
        Session 2
      </Box>
      <Box width={[1, 1/8]}>
        9:45a - 10:45a
      </Box>
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]}>
        B1
      </Box>
      <Box
        width={[1, 1/8]}>
        B2
      </Box>
      <Box
        width={[1, 1/8]}>
        B3
      </Box>
      <Box
        width={[1, 1/8]}>
        B4
      </Box>
      <Box
        width={[1, 1/8]}>
        B5
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box
        width={[1, 1/8]} >
        Break
      </Box>
      <Box
        width={[1, 7/8]} >
        10:45a - 11:00a
      </Box>
    </Flex>

    <Flex flexWrap="wrap" p={4} my={4} color="darkblue" bg="white">
      <Box width={[1, 1/8]}>
        Session 3
      </Box>
      <Box width={[1, 1/8]}>
        11:00a - 12:00p
      </Box>
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]}>
        C1
      </Box>
      <Box width={[1, 1/8]}>
        C2
      </Box>
      <Box width={[1, 1/8]}>
        C3
      </Box>
      <Box width={[1, 1/8]}>
        C4
      </Box>
      <Box width={[1, 1/8]}>
        C5
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={6} px={4} my={4} color="white">
      <Box width={[1, 1/8]}>
        Lunch
      </Box>
      <Box width={[1, 7/8]}>
        12:00P - 1:00P
      </Box>
    </Flex>

    <Flex flexWrap="wrap" p={4} my={4} color="darkblue" bg="white">
      <Box width={[1, 1/8]}>
        Session 4
      </Box>
      <Box width={[1, 1/8]}>
        1:00p - 2:00p
      </Box>
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]} >
        D1
      </Box>
      <Box width={[1, 1/8]} >
        D2
      </Box>
      <Box width={[1, 1/8]} >
        D3
      </Box>
      <Box width={[1, 1/8]} >
        D4
      </Box>
      <Box width={[1, 1/8]} >
        D5
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box
        width={[1, 1/8]}>
        Break
      </Box>
      <Box
        width={[1, 7/8]}>
        2:00p - 2:15p
      </Box>
    </Flex>

    <Flex flexWrap="wrap" p={4} my={4} color="darkblue" bg="white">
      <Box width={[1, 1/8]}>
        Session 5
      </Box>
      <Box width={[1, 1/8]}>
        2:15p - 3:15p
      </Box>
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]}>
        E1
      </Box>
      <Box width={[1, 1/8]}>
        E2
      </Box>
      <Box width={[1, 1/8]}>
        E3
      </Box>
      <Box width={[1, 1/8]}>
        E4
      </Box>
      <Box width={[1, 1/8]}>
        E5
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box width={[1, 1/8]} >
        Break
      </Box>
      <Box width={[1, 1/8]}>
        3:15p - 3:30p
      </Box>
      <Box width={[1, 3/4]} />
    </Flex>

    <Flex flexWrap="wrap" p={4} my={4} color="darkblue" bg="white">
      <Box width={[1, 1/8]}>
        Session 6
      </Box>
      <Box width={[1, 1/8]}>
        3:30p - 4:30p
      </Box>
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]} >
        F1
      </Box>
      <Box width={[1, 1/8]}>
        F2
      </Box>
      <Box width={[1, 1/8]}>
        F3
      </Box>
      <Box width={[1, 1/8]}>
        F4
      </Box>
      <Box width={[1, 1/8]}>
        F5
      </Box>
    </Flex>

    <Flex flexWrap="wrap" px={4} py={5} my={4} color="darkblue" bg="white">
      <Box
        width={[1, 1/8]} >
        Closing Keynote
      </Box>
      <Box
        width={[1, 1/8]}>
        4:35p - 5:00p
      </Box>
      <Box
        width={[1, 1/8]}>
        Jeff Strauss
      </Box>
      <Box
        width={[1, 1/8]} />
      <Box
        width={[1, 1/8]} />
      <Box
        width={[1, 1/8]} />
      <Box
        width={[1, 1/8]} />
      <Box
        width={[1, 1/8]} />
    </Flex>
  </div>))
