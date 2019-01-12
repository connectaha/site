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
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Jonathan Mills
      </Box>
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]} />
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
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Courtney<br />
        Heitman<br />
        <br />
        Mapping the User's Journey
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Jason<br />
        Swett<br />
        <br />
        Using Tests as a Tool to Wrangle Legacy Projects
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        TBD<br />
        TBD<br />
        <br />

      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        TBD<br />
        TBD<br />
        <br />
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Paul<br />
        Gower<br />
        <br />
        Overcoming Delay: How The Best Developers Increase Productivity
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box width={[1, 1/8]}>
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
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Cameron<br />
        Presley<br />
        <br />
        How Functional Programming Made Me A Better Developer
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Beth<br />
        Beth Laing<br />
        <br />
        You're Hired! Avoiding missteps and false starts in your new job
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        TBD<br />
        TBD<br />
        <br />
        Secure by Design
      </Box>
      <Box
        width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Jeremy<br />
        Clark<br />
        <br />
        Becoming a Social Developer: A Guide for Introverts
      </Box>
      <Box
        width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        TBD<br />
        TBD<br />
        <br />
        I Can't See: Low Vision A11Y & Users
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box
        width={[1, 1/8]}>
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
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Jeff<br />
        Fritz<br />
        <br />
        Zero to Community Hero - Start Live Coding on Twitch
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        TBD<br />
        TBD<br />
        <br />

      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Alison<br />
        Hawke<br />
        <br />
        A Hero's Journey: Manual Tester to Automation QA
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Simon<br />
        Yost<br />
        <br />
        Closing the Fidelity Gap with UI Engineering
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Michael<br />
        Eaton<br />
        <br />
        Leadership Journey: From Software Developer to Leader
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

    <Flex flexWrap="wrap" p={4} my={4} color="darkblue" bg="white" >
      <Box width={[1, 1/8]}>
        Session 4
      </Box>
      <Box width={[1, 1/8]}>
        1:00p - 2:00p
      </Box>
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        John Henry<br />
        Müller<br />
        <br />
        From Color Palette to Color System
      </Box>
      <Box width={[1, 1/8]} p={1} >
        <Divider w={1} borderColor="darkblue" />
        Cassandra<br />
        Faris<br />
        <br />
        Health: The Most Important Dev Tool
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Jerry<br />
        Koske<br />
        <br />
        TBD
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        TBD<br />
        TBD<br />
        <br />
      </Box>
      <Box width={[1, 1/8]} p={1} >
        <Divider w={1} borderColor="darkblue" />
        Charlie<br />
        Koster<br />
        <br />
        AI Doesn't Have to Be Hard
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
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Arthur<br />
        Doler<br />
        <br />
        How to Work with People: A Guide to Playing Nicely with Others
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Patrick<br />
        Wolff<br />
        <br />
        Grow The Future With Internship 2.0
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Mike<br />
        Hostetler<br />
        <br />
        Python for the Curious
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Javier<br />
        Lozano<br />
        <br />
        .NET Yesterday, Today, and Tomorrow
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Katia<br />
        Wheeler<br />
        <br />
        Thinking About React, Atomically
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
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Sandi<br />
        Barr<br />
        <br />
        NgRx: Redux-style State Management in Angular
      </Box>
      <Box width={[1, 1/8]} p={1} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Ash<br />
        Banaszek<br />
        <br />
        Fear, Pain, and Loathing: Empathizing with your Users' Plight
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Greg<br />
        Dick<br />
        <br />
        Inverting the Management Relationship
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Thomas<br />
        Cleberg<br />
        <br />
        Model Management: The Least You Can Do
      </Box>
      <Box width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        TBD<br />
        TBD<br />
        <br />
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
        width={[1, 1/8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Jeff Strauss
      </Box>
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]} />
      <Box width={[1, 1/8]} />
    </Flex>
  </div>))
