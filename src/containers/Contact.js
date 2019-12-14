import React from 'react'
import styled from 'styled-components'
import { Head, withRouteData } from 'react-static'
import { Box, Card, Image, Flex, Text } from 'rebass'


export default withRouteData(() => (
  <div>
    <Head>
      <meta property="og:title" content="2020 Connectaha Contact Us" />
      <meta property="og:image" content="https://connectaha.com/static/presenter.1286b8ef.jpg" />
      <meta property="og:url" content="https://www.connectaha.com/contact" />
      <meta property="og:description" content="March 27, 2020 Walter Scott Conference Center" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="2020 Connectaha Conference" />
      <meta name="twitter:image:alt" content="March 27, 2020 Walter Scott Conference Center" />
    </Head>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message" /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>)
)
