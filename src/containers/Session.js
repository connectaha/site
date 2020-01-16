import React from "react";
import styled from "styled-components";
import { width } from "styled-system";
import { Head, withRouteData } from "react-static";
import { Box, Card, Flex, Image, Text, Heading } from "rebass";
import { sortBy } from "ramda";
import Truncate from "react-truncate";

const Clickable = styled.div`
  cursor: pointer;
  ${width};
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
    <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
      {sortBy(session => session.title, speakers).map(session => (
        <Clickable key={session.id} width={[1, "425px", "850px"]}>
          <Box width={1}>
            <Card
              m={16}
              p={2}
              borderRadius={8}
              boxShadow="0 0 16px rgba(0, 0, 0, .25)"
              onClick={() => {
                window.location = `/speakers/${session.id}`;
              }}
            >
              <Box p={5}>
                <Flex flexDirection="column" pb={5}>
                  <Text color="darkblue" fontSize={[4, 3]} pb={2}>
                    {session.title}
                  </Text>
                  <Text color="dark" fontSize={[2, 1]} pb={3}>
                    {session.firstName} {session.lastName}
                  </Text>
                </Flex>
                <Text color="darkblue" fontSize={[3, 2]}>
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
