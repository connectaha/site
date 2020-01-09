import React from 'react'
import styled from 'styled-components'
import { Head, withRouteData } from 'react-static'
import { Box, Card, Image, Flex, Text } from 'rebass'

const Clickable = styled.div`
  cursor: pointer;
`

const Link = styled.a`
    color: #ff6600;
    cursor: pointer;
`

export default withRouteData(({ sponsors }) => {
  const tier1 = sponsors.filter(s => s.tier === '1')
  const tier2 = sponsors.filter(s => s.tier === '2')
  return (
    <div>
      <Head>
        <meta property="og:title" content="2020 Connectaha Sponsors" />
        <meta property="og:image" content="https://connectaha.com/static/presenter.1286b8ef.jpg" />
        <meta property="og:url" content="https://www.connectaha.com/sponsors" />
        <meta property="og:description" content="March 27, 2020 Walter Scott Conference Center" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="2020 Connectaha Conference" />
        <meta name="twitter:image:alt" content="March 27, 2020 Walter Scott Conference Center" />
      </Head>
      <Text fontSize="20px" pl={4} pt={4}>Interested in sponsoring? We still have slots available. <Link href="Connectaha2020_Prospectus.pdf">Check out our prospectus</Link>
      </Text>
      <Text fontSize="32px" pl={4} pt={4} pb={2} color="white">Sponsors</Text>
      <Text fontSize="20px" pl={4} pt={2} color="white">Tier 1</Text>
      <Flex flexWrap="wrap" p={32} alignItems="center" justifyContent="center">
        {
          tier1.map(sponsor => (
            <Clickable key={sponsor.id}>
              <Box width={370} height={370}>
                <Card
                  m={16}
                  p={2}
                  width={[1, 1, 1 / 2]}
                  borderRadius={8}
                  boxShadow="0 0 16px rgba(0, 0, 0, .25)"
                  onClick={() => window.open(sponsor.url)}>
                  <Image src={sponsor.photo} />
                </Card>
              </Box>
            </Clickable>)
          )
        }
      </Flex>
      <Text fontSize="20px" pl={4} pt={2} color="white">Tier 2</Text>
      <Flex flexWrap="wrap" p={32} alignItems="center" justifyContent="center">
        {
          tier2.map(sponsor => (
            <Clickable key={sponsor.id}>
              <Box width={220} height={220}>
                <Card
                  m={16}
                  p={1}
                  width={[1, 1, 1 / 2]}
                  borderRadius={8}
                  boxShadow="0 0 16px rgba(0, 0, 0, .25)"
                  onClick={() => window.open(sponsor.url)}>
                  <Image src={sponsor.photo} />
                </Card>
              </Box>
            </Clickable>)
          )
        }
      </Flex>
    </div>)
}
)
