import React from 'react'
import styled from 'styled-components'
import { Head, withRouteData } from 'react-static'
import { Box as BaseBox, Flex, Divider, Heading, Text } from 'rebass'

const Box = styled(BaseBox)`
  cursor: pointer;
`

const click = id => { window.location = `/speakers/${id}` }

export default withRouteData(() => (
  <div>
    <Head>
      <meta property="og:title" content="2020 Connectaha Schedule" />
      <meta property="og:url" content="https://www.connectaha.com/schedule" />
      <meta property="og:description" content="March 27, 2020 Walter Scott Conference Center" />
      <meta property="og:image" content="https://connectaha.com/static/presenter.1286b8ef.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="2020 Connectaha Conference" />
      <meta name="twitter:image:alt" content="March 27, 2020 Walter Scott Conference Center" />
    </Head>
    <Heading pl={4} pt={6} pb={4} color="white">Schedule</Heading>

    <Flex flexWrap="wrap" px={4} py={5} my={4} color="darkblue" bg="white">
      <Box fontSize={3} pb={4} width={[1, 1 / 1]}>Session 1   |   9:00a- 10:00a</Box>
      <Box p={2} pb={5} width={[1, 1 / 5]}>
        <Heading fontSize={2}>Northwest Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
         Joel<br />
         Tosi<br />
        <br />
         Growing a Learning Organization
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Southwest Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
        Chris<br />
        DeMars<br />
        <br />
        Believe in the Power of CSS
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Executive Boardroom<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
        Jerry Koske<br />
      Aviture CTO<br />
        <br />
        Disciplined Development: What is dead may never die
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Northeast Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Jeff<br />
      Strauss<br />
        <br />
        What you need to know about open source - Trust me I'm a lawyer.
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Southeast Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Scott<br />
      Connerly<br />
        <br />
      Everything's an Experiment: the Try/Catch for Teams
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box fontSize={3} pb={3} width={[1, 1 / 1]}>Break   |   10:00a- 10:15a</Box>
    </Flex>

    <Flex flexWrap="wrap" px={4} py={5} my={4} color="darkblue" bg="white">
      <Box fontSize={3} pb={4} width={[1, 1 / 1]}>Session 2   |   10:15a- 11:15a</Box>
      <Box p={2} width={[1, 1 / 5]}>
        <Heading fontSize={2}>Northwest Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
        Hilary<br />
        Stohs-Krause<br />
        <br />
        Using our powers for good: Tech and social impact
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Southwest Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
        Jonathan<br />
        Mills<br />
        <br />
        A Skeptics guide to functional style javascript
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Executive Boardroom<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Heather Terenzio<br />
      Techtonic CEO<br />
        <br />
      Preparing For the Future of Employment In Technology
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Northeast Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Allen<br />
      Wu<br />
      <br />
      Airbnb and Luxury Retreats, a post acquisition technical migration
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Southeast Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Ash<br />
      Banaszek<br />
        <br />
        Fail Faster: Quick UX Design Techniques to Drive Toward Success
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box fontSize={3} pb={3} width={[1, 1 / 1]}>Break   |   11:15a- 11:30a</Box>
    </Flex>

    <Flex flexWrap="wrap" px={4} py={5} my={4} color="darkblue" bg="white">
      <Box fontSize={3} pb={4} width={[1, 1 / 1]}>Session 3   |   11:30a- 12:30p</Box>
      <Box p={2} width={[1, 1 / 5]}>
        <Heading fontSize={2}>Northwest Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
        Cory<br />
        House<br />
        <br />
        The Immutable Laws of Software and Life: Exploring Tradeoffs
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Southwest Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
        Alison<br />
        Hawke<br />
        <br />
        Building a QA practice from scratch
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Executive Boardroom<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Sponsor<br />
      Talk<br />
        <br />
      Farm Credit Services of America
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Northeast Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Sandi<br />
      Barr<br />
      <br />
      Design Thinking for Inclusive Collaboration
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Southeast Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Christine Seeman<br />
      Ryan Hochstetler<br />
        <br />
      You don’t know ML and neither do we
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box fontSize={3} pb={3} width={[1, 1 / 1]}>Lunch   |   12:30a- 1:30p</Box>
    </Flex>

    <Flex flexWrap="wrap" px={4} py={5} my={4} color="darkblue" bg="white">
      <Box fontSize={3} pb={4} width={[1, 1 / 1]}>Session 4   |   1:30p- 2:30p</Box>
      <Box p={2} width={[1, 1 / 5]}>
        <Heading fontSize={2}>Northwest Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
        Adrienne<br />
        Tacke<br />
        <br />
        Testing the Functional Waters: Functional Programming Principles and Patterns in C#
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Southwest Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
        Cameron<br />
        Presley<br />
        <br />
        How To Have Code Reviews Developers Actually Want
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Executive Boardroom<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Courtney<br />
      Heitman<br />
        <br />
      Dark Side of UX
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Northeast Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Amanda<br />
      Perkins<br />
      <br />
      Travels through the Looking Glass: My journey from Customer Service rep to Automation Test Engineer
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Southeast Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Kathy I.<br />
      Andersen<br />
        <br />
        Diamonds in Our Own Backyard: Building Great Development Teams at Hudl
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box fontSize={3} pb={3} width={[1, 1 / 1]}>Break   |   2:30p- 2:45p</Box>
    </Flex>

    <Flex flexWrap="wrap" px={4} py={5} my={4} color="darkblue" bg="white">
      <Box fontSize={3} pb={4} width={[1, 1 / 1]}>Session 5   |   2:45p- 3:45p</Box>
      <Box p={2} width={[1, 1 / 5]}>
        <Heading fontSize={2}>Northwest Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
        Andrew<br />
        Wirick<br />
        <br />
        Design systems from the other side: understanding the value for non-designer roles.
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Southwest Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
        Charlie<br />
        Koster<br />
        <br />
        The Side Project Survival Guide
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Executive Boardroom<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Cassandra<br />
      Faris<br />
        <br />
      Get Out of Your Lane!
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Northeast Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Duane<br />
      Newman<br />
      <br />
      Unit Testing with Ease
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Southeast Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Matt<br />
      Steele<br />
        <br />
        Automate Everything with GitHub Actions
      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
      <Box fontSize={3} pb={3} width={[1, 1 / 1]}>Break   |   3:45p- 4:00p</Box>
    </Flex>

    <Flex flexWrap="wrap" px={4} py={5} my={4} color="darkblue" bg="white">
      <Box fontSize={3} pb={4} width={[1, 1 / 1]}>Session 6   |   4:00p- 5:00p</Box>
      <Box p={2} width={[1, 1 / 5]}>
        <Heading fontSize={2}>Northwest Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
        Jennifer<br />
        Blatz<br />
        <br />
        What the “F” is UX and how does it fit in to the agile world?
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Southwest Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
        Jake<br />
        Partusch<br />
        <br />
        JavaScript and Accessibility: Building Thoughtful Interactions
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Executive Boardroom<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      <br />
      <br />
        <br />
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Northeast Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Chris<br />
      Chung<br />
      <br />
      Secret Backlogs
      </Box>
      <Box p={2} width={[1, 1 / 5]}>
      <Heading fontSize={2}>Southeast Room<br /></Heading>
        <Divider w={1} borderColor="darkblue" />
      Bill<br />
      Dinger<br />
        <br />
        The Dungeon Master's Guide to DevOps

      </Box>
    </Flex>

    <Flex flexWrap="wrap" py={5} px={4} my={4} color="darkblue" bg="white">
      <Box fontSize={3} pb={2} width={[1, 1 / 1]}>Connectaha Social   |   5:00p- 7:00p</Box>
      <Box p={2} width={[1, 2 / 5]}>
        <Heading fontSize={2}>Center Room<br /></Heading>
        <Divider w={1} borderColor="darkblue"/>
        Join us for a post conference reception. Connect with other conference attendees and speakers.  Stick around to win raffle prizes. Must be present to win.
        <br />
        <br />
      </Box>
    </Flex>

  </div>))
