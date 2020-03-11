/* eslint-disable max-len */
import React, { Component } from "react";
import { Head } from "react-static";
import styled from "styled-components";
import { fontSize, space, width } from "styled-system";
import { Button, Text, Heading } from "rebass";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  overflow: hidden;
  color: ${props => props.theme.colors.white};
  ${space};
  ${width};
`;

const A = styled.a`
color: white;
${space};
`

export default class Covid extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }

  render() {
    return (
      <div>
        <Head>
          <meta
            property="og:title"
            content="2020 Connectaha COVID announcement"
          />
          <meta property="og:url" content="https://www.connectaha.com/covid" />
          <meta
            property="og:description"
            content="March 27, 2020 Walter Scott Conference Center"
          />
          <meta
            property="og:image"
            content="https://connectaha.com/static/ConfImage.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="2020 Connectaha Conference" />
          <meta
            name="twitter:image:alt"
            content="March 27, 2020 Walter Scott Conference Center"
          />
        </Head>

        <Center mt={3} mb={3}>
          <Center width={[1, 0.5]} px={[2, 4]}>
            <Heading fontWeight={300}>Connectaha Covid Announcement</Heading>
            <Text fontSize={3} fontWeight={300} pt={4}>
              Over the past couple weeks, we've been monitoring the COVID-19
              situation in the US. We've had conversations with speakers,
              sponsors, and other conference organizers. Over the last 24 hours,
              we've made the painful decision to cancel the 2020 Connectaha
              conference.
            </Text>
            <Text fontSize={3} fontWeight={300} pt={4}>
              From day one, the conference has been about connecting everyone in
              the software profession. We feel, at this time, that it would be
              irresponsible to move forward with having the conference as
              scheduled on March 27.
            </Text>
            <Text fontSize={3} fontWeight={300} pt={4}>
              While we have not yet ironed out all of the details, there are a
              few things we do know right now:
            </Text>
            <Text fontSize={3} fontWeight={300} pt={4}>
              For all of our <strong>attendees</strong>, you will receive a full refund for the
              ticket that you purchased. You will be receiving your refund in
              the next week. If you have any questions about the status of your
              refund, feel free to contact Brian and Nate at
              <A href='mailto:admin@connectaha.com' pl={1}>admin@connectaha.com</A>
            </Text>
            <Text fontSize={3} fontWeight={300} pt={4}>
              If you're flying in to Omaha for this event, most airlines have
              been working with travelers to change or cancel their tickets.
            </Text>
            <Text fontSize={3} fontWeight={300} pt={4}>
              For our <strong>speakers</strong>, we know first hand that you have invested a lot
              of time and energy leading up to Connectaha. You've spent time
              crafting and perfecting your talk, as well as practicing in
              preparation. More than that, you've been emotionally invested in
              Connectaha 2020 sharing &amp; engaging on social media. For that,
              we will be eternally grateful. If you're still interested in
              giving your talk, let us know and we will try and connect you with
              various user groups. If you're interested, reach out to
              <A href='mailto:admin@connectaha.com' pl={1}>admin@connectaha.com</A>
            </Text>
            <Text fontSize={3} fontWeight={300} pt={4}>
              Without the investments of our <strong>sponsors</strong> in Connectaha and the
              community, we wouldn't have made it as far as we did. We are
              grateful for you. You will be receiving an email from us shortly
              as we work to coordinate your refunds. We want to thank you for
              your commitment and we hope that we are fortunate enough to work
              with you next year.
            </Text>
            <Text fontSize={3} fontWeight={300} pt={4}>
              More than anything we didn’t want to cancel this event. We’ve
              worked hard all year long to create an event that would help the
              software industry thrive in Omaha. At the end of the day we feel
              it was the right thing to do, and we thank you for your
              understanding. If you have questions, please reach out at
              <A href='mailto:admin@connectaha.com' pl={1}>admin@connectaha.com</A>
            </Text>
          </Center>
        </Center>
      </div>
    );
  }
}
