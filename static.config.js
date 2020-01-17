import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { filter, prop, sortBy } from 'ramda'

const unsortedSpeakers = require('./speakers.json')
const speakers = filter(_ => _.photo.length > 0, sortBy(prop('id'), unsortedSpeakers))

const unsortedSponsors = require('./sponsors.json')
const sponsors = filter(_ => _.photo.length > 0, sortBy(prop('id'), unsortedSponsors))

export default {
  siteRoot: '',
  getSiteData: () => ({
    title: 'Connectaha',
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      path: '/contact',
      component: 'src/containers/Contact',
    },
    {
      path: '/details',
      component: 'src/containers/Details',
    },
    {
      path: '/schedule',
      component: 'src/containers/Schedule',
    },
    {
      path: '/sessions',
      component: 'src/containers/Session',
      getData: () => ({
        speakers
      })
    },
    {
      path: '/speakers',
      component: 'src/containers/Speakers',
      getData: () => ({
        speakers
      }),
      children: speakers.map((speaker, i, arr) => ({
        path: `/${speaker.id}`,
        component: 'src/containers/Speaker',
        getData: () => ({
          speaker,
          nextId: i + 1 === arr.length ? arr[0].id : arr[i + 1].id,
          previousId: i === 0 ? arr[arr.length - 1].id : arr[i - 1].id
        }),
      }))
    },
    {
      path: '/sponsors',
      component: 'src/containers/Sponsors',
      getData: () => ({
        sponsors
      }),
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:type" content="website" />

            <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed:400,500,500i,700|Barlow:400,700,900&display=swap" rel="stylesheet"></link>
            <title>Connectaha</title>

            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
