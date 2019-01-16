import React from 'react'
import styled from 'styled-components'
import { withRouteData } from 'react-static'
import { Box as BaseBox, Flex, Divider, Heading } from 'rebass'

const Box = styled(BaseBox)`
  cursor: pointer;
`

const click = id => { window.location = `/speakers/${id}` }

export default withRouteData(() => (
  <div>
    <Heading pl={4} pt={6} pb={4} color="white">Schedule</Heading>

    <Flex flexWrap="wrap" px={4} py={5} my={4} color="darkblue" bg="white">
      <Box
        width={[1, 1 / 8]}>
        Opening Keynote
      </Box>
      <Box
        width={[1, 1 / 8]} >
        8:00a - 8:25a
      </Box>
      <Box width={[1, 1 / 8]} p={1}>
        Jonathan<br />
        Mills<br />
        <br />
        Center Room
      </Box>
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} />
    </Flex>

    <Flex flexWrap="wrap" p={4} my={4} color="darkblue" bg="white">
      <Box
        width={[1, 1 / 8]} >
        Session 1
      </Box>
      <Box width={[1, 1 / 8]}>
        8:30a - 9:30a
      </Box>
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('courtney-heitman')}>

        <Divider w={1} borderColor="darkblue" />
        Courtney<br />
        Heitman<br />
        <br />
        Southwest Room <br />
        <br />
        Mapping the User's Journey<br />
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('jason-swett')}>
        <Divider w={1} borderColor="darkblue" />
        Jason<br />
        Swett<br />
        <br />
        Northwest Room <br />
        <br />
        Using Tests as a Tool to Wrangle Legacy Projects<br />
      </Box>
      <Box width={[1, 1 / 8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        TBD<br />
        TBD<br />
        <br />
        Exec Boardroom <br />
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('mat-warger')}>
        <Divider w={1} borderColor="darkblue" />
        Mat<br />
        Warger<br />
        <br />
        Northeast Room <br />
        <br />
        Bootstrap Your App with AWS Amplify!
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('paul-gower')}>
        <Divider w={1} borderColor="darkblue" />
        Paul<br />
        Gower<br />
        <br />
        Southeast Room <br />
        <br />
        Overcoming Delay: How The Best Developers Increase Productivity <br />
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box width={[1, 1 / 8]}>
        Break
      </Box>
      <Box width={[1, 7 / 8]}>
        9:30a - 9:45a
      </Box>
    </Flex>

    <Flex flexWrap="wrap" p={4} my={4} color="darkblue" bg="white">
      <Box width={[1, 1 / 8]} >
        Session 2
      </Box>
      <Box width={[1, 1 / 8]}>
        9:45a - 10:45a
      </Box>
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('cameron-presley')}>
        <Divider w={1} borderColor="darkblue" />
        Cameron<br />
        Presley<br />
        <br />
        Southwest Room<br />
        <br />
        How Functional Programming Made Me A Better Developer

      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('beth-laing')}>
        <Divider w={1} borderColor="darkblue" />
        Beth<br />
        Laing<br />
        <br />
        Northwest Room<br />
        <br />
        You're Hired! Avoiding missteps and false starts in your new job
      </Box>
      <Box width={[1, 1 / 8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        TBD<br />
        TBD<br />
        <br />
        Exec Boardroom
      </Box>
      <Box
        width={[1, 1 / 8]} p={1} onClick={() => click('jeremy-clark')}>
        <Divider w={1} borderColor="darkblue" />
        Jeremy<br />
        Clark<br />
        <br />
        Northeast Room<br />
        <br />
        Becoming a Social Developer: A Guide for Introverts
      </Box>
      <Box
        width={[1, 1 / 8]} p={1} onClick={() => click('mike-douglas')}>
        <Divider w={1} borderColor="darkblue" />
        Mike<br />
        Douglas<br />
        <br />
        Southeast Room<br />
        <br />
        Securing Your CI/CD Pipeline
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box
        width={[1, 1 / 8]}>
        Break
      </Box>
      <Box
        width={[1, 7 / 8]} >
        10:45a - 11:00a
      </Box>
    </Flex>

    <Flex flexWrap="wrap" p={4} my={4} color="darkblue" bg="white">
      <Box width={[1, 1 / 8]}>
        Session 3
      </Box>
      <Box width={[1, 1 / 8]}>
        11:00a - 12:00p
      </Box>
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('jeff-fritz')}>
        <Divider w={1} borderColor="darkblue" />
        Jeff<br />
        Fritz<br />
        <br />
        Southwest Room<br />
        <br />
        Zero to Community Hero - Start Live Coding on Twitch
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('matt-busche')}>
        <Divider w={1} borderColor="darkblue" />
        Matt <br />
        Busche <br />
        <br />
        Northwest Room<br />
        <br />
        Secure by Design
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('alison-hawke')}>
        <Divider w={1} borderColor="darkblue" />
        Alison<br />
        Hawke<br />
        <br />
        Exec Boardroom<br />
        <br />
        A Hero's Journey: Manual Tester to Automation QA
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('simon-yost')}>
        <Divider w={1} borderColor="darkblue" />
        Simon<br />
        Yost<br />
        <br />
        Northeast Room<br />
        <br />
        Closing the Fidelity Gap with UI Engineering
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('michael-eaton')}>
        <Divider w={1} borderColor="darkblue" />
        Michael<br />
        Eaton<br />
        <br />
        Southeast Room<br />
        <br />
        Leadership Journey: From Software Developer to Leader
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={6} px={4} my={4} color="white">
      <Box width={[1, 1 / 8]}>
        Lunch
      </Box>
      <Box width={[1, 7 / 8]}>
        12:00P - 1:00P
      </Box>
    </Flex>

    <Flex flexWrap="wrap" p={4} my={4} color="darkblue" bg="white" >
      <Box width={[1, 1 / 8]}>
        Session 4
      </Box>
      <Box width={[1, 1 / 8]}>
        1:00p - 2:00p
      </Box>
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('john-henry-muller')}>
        <Divider w={1} borderColor="darkblue" />
        John Henry<br />
        Müller<br />
        <br />
        Southwest Room<br />
        <br />
        From Color Palette to Color System
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('cassandra-faris')}>
        <Divider w={1} borderColor="darkblue" />
        Cassandra<br />
        Faris<br />
        <br />
        Northwest Room<br />
        <br />
        Health: The Most Important Dev Tool
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('jerry-koske')}>
        <Divider w={1} borderColor="darkblue" />
        Jerry<br />
        Koske<br />
        <br />
        Exec Boardroom<br />
        <br />
        TBD
      </Box>
      <Box width={[1, 1 / 8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        TBD<br />
        TBD<br />
        <br />
        Northeast Room<br />
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('charlie-koster')}>
        <Divider w={1} borderColor="darkblue" />
        Charlie<br />
        Koster<br />
        <br />
        Southeast Room<br />
        <br />
        AI Doesn't Have to Be Hard
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box
        width={[1, 1 / 8]}>
        Break
      </Box>
      <Box
        width={[1, 7 / 8]}>
        2:00p - 2:15p
      </Box>
    </Flex>

    <Flex flexWrap="wrap" p={4} my={4} color="darkblue" bg="white">
      <Box width={[1, 1 / 8]}>
        Session 5
      </Box>
      <Box width={[1, 1 / 8]}>
        2:15p - 3:15p
      </Box>
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('arthur-doler')}>
        <Divider w={1} borderColor="darkblue" />
        Arthur<br />
        Doler<br />
        <br />
        Southwest Room<br />
        <br />
        How to Work with People: A Guide to Playing Nicely with Others
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('patrick-wolff')}>
        <Divider w={1} borderColor="darkblue" />
        Patrick<br />
        Wolff<br />
        <br />
        Northwest Room<br />
        <br />
        Grow The Future With Internship 2.0
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('mike-hostetler')}>
        <Divider w={1} borderColor="darkblue" />
        Mike<br />
        Hostetler<br />
        <br />
        Exec Boardroom<br />
        <br />
        Python for the Curious<br />
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('javier-lozano')}>
        <Divider w={1} borderColor="darkblue" />
        Javier<br />
        Lozano<br />
        <br />
        Northeast Room<br />
        <br />
        .NET Yesterday, Today, and Tomorrow<br />
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('katia-wheeler')}>
        <Divider w={1} borderColor="darkblue" />
        Katia<br />
        Wheeler<br />
        <br />
        Southeast Room<br />
        <br />
        Thinking About React, Atomically
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box width={[1, 1 / 8]} >
        Break
      </Box>
      <Box width={[1, 1 / 8]}>
        3:15p - 3:30p
      </Box>
      <Box width={[1, 3 / 4]} />
    </Flex>

    <Flex flexWrap="wrap" p={4} my={4} color="darkblue" bg="white">
      <Box width={[1, 1 / 8]}>
        Session 6
      </Box>
      <Box width={[1, 1 / 8]}>
        3:30p - 4:30p
      </Box>
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('sandi-barr')}>
        <Divider w={1} borderColor="darkblue" />
        Sandi<br />
        Barr<br />
        <br />
        Southwest Room<br />
        <br />
        NgRx: Redux-style State Management in Angular
      </Box>
      <Box width={[1, 1 / 8]} p={1} p={1} onClick={() => click('ash-banaszek')}>
        <Divider w={1} borderColor="darkblue" />
        Ash<br />
        Banaszek<br />
        <br />
        Northwest Room<br />
        <br />
        Fear, Pain, and Loathing: Empathizing with your Users' Plight
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('greg-dick')}>
        <Divider w={1} borderColor="darkblue" />
        Greg<br />
        Dick<br />
        <br />
        Exec Boardroom<br />
        <br />
        Inverting the Management Relationship
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('thomas-cleberg')}>
        <Divider w={1} borderColor="darkblue" />
        Thomas<br />
        Cleberg<br />
        <br />
        Northeast Room<br />
        <br />
        Model Management: The Least You Can Do
      </Box>
      <Box width={[1, 1 / 8]} p={1} onClick={() => click('kathy-i-andersen')}>
        <Divider w={1} borderColor="darkblue" />
        Kathy I Andersen<br />
        Nicholas Tuck<br />
        <br />
        Southeast Room<br />
        <br />
        Something's Rotten in the State of Quality
      </Box>
    </Flex>

    <Flex flexWrap="wrap" px={4} py={5} my={4} color="darkblue" bg="white">
      <Box
        width={[1, 1 / 8]} >
        Closing Keynote
      </Box>
      <Box
        width={[1, 1 / 8]}>
        4:35p - 5:00p
      </Box>
      <Box
        width={[1, 1 / 8]} p={1}>
        <Divider w={1} borderColor="darkblue" />
        Jeff<br />
        Strauss<br />
        <br />
        Center Room<br />
      </Box>
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} />
      <Box width={[1, 1 / 8]} />
    </Flex>
  </div>))
