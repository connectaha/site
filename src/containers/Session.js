import React from "react";
import styled from "styled-components";
import { Head, withRouteData } from "react-static";
import { Box, Card, Flex, Image, Text, Heading } from "rebass";
import { sortBy } from "ramda";
import Truncate from "react-truncate";

const Clickable = styled.div`
  cursor: pointer;
`;

export default withRouteData(({ speakers }) => (
  <div>
    <Head>
      <meta property="og:title" content="2020 Connectaha Sessions" />
      <meta
        property="og:image"
        content="https://connectaha.com/static/presenter.1286b8ef.jpg"
      />
      <meta property="og:url" content="https://www.connectaha.com/sessions" />
      <meta
        property="og:description"
        content="March 27, 2020 Walter Scott Conference Center"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="2020 Connectaha Conference" />
      <meta
        name="twitter:image:alt"
        content="March 27, 2020 Walter Scott Conference Center"
      />
    </Head>
    <Heading pl={4} pt={6} pb={4} color="white">
      Sessions
    </Heading>
    <Flex
      flexDirection="column"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      {sortBy(session => session.title, speakers).map(session => (
        <Clickable key={session.id}>
          <Box>
            <Card
              m={16}
              p={2}
              width={[1, 1, 1 / 2]}
              borderRadius={8}
              boxShadow="0 0 16px rgba(0, 0, 0, .25)"
              onClick={() => {
                window.location = `/speakers/${session.id}`;
              }}
            >
              <Box p={5}>
                <Flex alignItems="center" justifyContent="space-between" pb={5}>
                  <Flex flexDirection="column">
                    <Text color="darkblue" fontSize={4} pb={2}>
                      {session.title}
                    </Text>
                    <Text color="dark" fontSize={2} pb={3}>
                      {session.firstName} {session.lastName}
                    </Text>
                  </Flex>
                  <Box width={140} height={220}>
                    <Image src={session.photo} />
                  </Box>
                </Flex>
                <Text color="darkblue" fontSize={3}>
                  <Truncate lines={4}>{session.description}</Truncate>
                </Text>
                />
              </Box>
            </Card>
          </Box>
        </Clickable>
      ))}
    </Flex>
  </div>
));
