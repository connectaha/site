import React from 'react'
import styled from 'styled-components'
import { Head, withRouteData } from 'react-static'
import { Box, Card, Image, Flex, Text, Heading } from 'rebass'

const Clickable = styled.div`
  cursor: pointer;
`

export default withRouteData(({ sponsors }) =>
  (
    <div>
      <Head>
        <meta property="og:title" content="2019 Connectaha Sponsors" />
        <meta property="og:image" content="https://connectaha.com/static/presenter.1286b8ef.jpg" />
        <meta property="og:url" content="https://www.connectaha.com/sponsors" />
        <meta property="og:description" content="March 8, 2019 Walter Scott Conference Center" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="2019 Connectaha Conference" />
        <meta name="twitter:image:alt" content="March 8, 2019 Walter Scott Conference Center" />
      </Head>
      <Heading pl={4} pt={6} pb={4} color="white">Sponsors</Heading>
      <Flex flexWrap="wrap" p={32}>
        {
          sponsors.map(sponsor => (
            <Clickable key={sponsor.id}>
              <Box width={280} height={440}>
                <Card
                  m={16}
                  p={2}
                  width={[1, 1, 1 / 2]}
                  borderRadius={8}
                  boxShadow="0 0 16px rgba(0, 0, 0, .25)"
                  onClick={() => { window.location = `/sponsors/${sponsor.id}` }}>
                  <Image src={sponsor.photo} />
                  <Box px={2}>
                    <Text color="black" fontSize={4}>
                      {sponsor.name}
                    </Text>
                  </Box>
                </Card>
              </Box>
            </Clickable>)
          )
        }
      </Flex>
    </div>)
)
