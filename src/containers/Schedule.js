import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Head, withRouteData } from 'react-static'
import { Box as BaseBox, Flex, Divider, Heading } from 'rebass'
import { groupBy } from 'ramda'

const Box = styled(BaseBox)`
  cursor: pointer;
`

const click = id => {
  window.location = `/speakers/${id}`
}

const session = (speakers, time) => {
  const byRoom = groupBy(s => s.room, speakers)

  const getDetails = room => {
    const details = byRoom[room] || [{}]
    const info = details.length === 1 ? details[0] : {
      firstName: `${details[0].firstName} ${details[0].lastName}`,
      lastName: `${details[1].firstName} ${details[1].lastName}`,
      title: details[0].title
    }

    return (<Fragment>
      {info.firstName} <br />
      {info.lastName} <br />
      <br />
      {info.title}
    </Fragment>
  )
}

  return (
    <Flex flexWrap="wrap" px={4} py={5} my={4} color="darkblue" bg="white">
      <Box fontSize={3} pb={4} width={[1, 1 / 1]}>{time}</Box>
      <Box p={2} pb={5} width={[1, 1 / 5]} onClick={() => click(byRoom.nw[0].id)}>
        <Heading fontSize={2}>
          Northwest Room
          <br />
        </Heading>
        <Divider w={1} borderColor="darkblue" />
        {getDetails('nw')}
      </Box>
      <Box p={2} width={[1, 1 / 5]} onClick={() => click(byRoom.sw[0].id)}>
        <Heading fontSize={2}>
          Southwest Room
          <br />
        </Heading>
        <Divider w={1} borderColor="darkblue" />
        {getDetails('sw')}
      </Box>
      <Box p={2} width={[1, 1 / 5]} onClick={() => click(byRoom.eb[0].id)}>
        <Heading fontSize={2}>
          Executive Boardroom
          <br />
        </Heading>
        <Divider w={1} borderColor="darkblue" />
        {getDetails('eb')}
      </Box>
      <Box p={2} width={[1, 1 / 5]} onClick={() => click(byRoom.ne[0].id)}>
        <Heading fontSize={2}>
          Northeast Room
          <br />
        </Heading>
        <Divider w={1} borderColor="darkblue" />
        {getDetails('ne')}
      </Box>
      <Box p={2} width={[1, 1 / 5]} onClick={() => click(byRoom.se[0].id)}>
        <Heading fontSize={2}>
          Southeast Room
          <br />
        </Heading>
        <Divider w={1} borderColor="darkblue" />
        {getDetails('se')}
      </Box>
    </Flex>
  );
};

export default withRouteData(({ speakers }) => {
  return (
    <div>
      <Head>
        <meta property="og:title" content="2020 Connectaha Schedule" />
        <meta property="og:url" content="https://www.connectaha.com/schedule" />
        <meta
          property="og:description"
          content="March 27, 2020 Walter Scott Conference Center"
        />
        <meta
          property="og:image"
          content="https://connectaha.com/static/presenter.1286b8ef.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="2020 Connectaha Conference" />
        <meta
          name="twitter:image:alt"
          content="March 27, 2020 Walter Scott Conference Center"
        />
      </Head>
      <Heading pl={4} pt={6} pb={4} color="white">
        Schedule
      </Heading>

      {session(speakers.filter(s => s.time === '9:00'), 'Session 1   |   9:00a- 10:00a')}

      <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
        <Box fontSize={3} pb={3} width={[1, 1 / 1]}>
          Break   |   10:00a- 10:15a
        </Box>
      </Flex>

      {session(speakers.filter(s => s.time === '10:15'), 'Session 2   |   10:15a- 11:15a')}

      <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
        <Box fontSize={3} pb={3} width={[1, 1 / 1]}>
          Break   |   11:15a- 11:30a
        </Box>
      </Flex>

      {session(speakers.filter(s => s.time === '11:30'), 'Session 3   |   11:30a- 12:30p')}

      <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
        <Box fontSize={3} pb={3} width={[1, 1 / 1]}>
          Lunch   |   12:30a- 1:30p
        </Box>
      </Flex>

      {session(speakers.filter(s => s.time === '1:30'), 'Session 4   |   1:30p- 2:30p')}

      <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
        <Box fontSize={3} pb={3} width={[1, 1 / 1]}>
          Break   |   2:30p- 2:45p
        </Box>
      </Flex>

      {session(speakers.filter(s => s.time === '2:45'), 'Session 5   |   2:45p- 3:45p')}

      <Flex flexWrap="wrap" py={1} px={4} my={4} color="white">
        <Box fontSize={3} pb={3} width={[1, 1 / 1]}>
          Break   |   3:45p- 4:00p
        </Box>
      </Flex>

      {session(speakers.filter(s => s.time === '4:00'), 'Session 6   |   4:00p- 5:00p')}

      <Flex flexWrap="wrap" py={5} px={4} my={4} color="darkblue" bg="white">
        <Box fontSize={3} pb={2} width={[1, 1 / 1]}>
          Connectaha Social   |   5:00p- 7:00p
        </Box>
        <Box p={2} width={[1, 2 / 5]}>
          <Heading fontSize={2}>
            Center Room
            <br />
          </Heading>
          <Divider w={1} borderColor="darkblue" />
          Join us for a post conference reception. Connect with other conference
          attendees and speakers. Stick around to win raffle prizes. Must be
          present to win.
          <br />
          <br />
        </Box>
      </Flex>
    </div>
  );
});
