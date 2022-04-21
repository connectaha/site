import React from "react"
import { Link, Button } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Speaker from "../components/speaker"
import { graphql, useStaticQuery } from "gatsby"
import scheduleStyles from "./schedule.module.scss"
import heroStyles from "../components/hero.module.scss"
import sessionsStyles from "./sessions.module.scss"
import sponsorsStyles from "./sponsors.module.scss"
import speakersStyles from "./speakers.module.scss"
{
  /*import sponsorsStyles from './sponsors.module.scss'*/
}
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTier1(sort: { fields: sponsorTitle, order: ASC }) {
        edges {
          node {
            sponsorTitle
            slug
            website
            image {
              fluid(maxWidth: 300) {
                src
                srcSet
                aspectRatio
                sizes
              }
            }
          }
        }
      }
      allContentfulSpeakers(sort: { fields: speakerOrder, order: ASC }) {
        edges {
          node {
            ... on ContentfulSpeakers {
              name
              slug
              company
              session
              title
              abstract {
                json
              }
              image {
                fluid(maxWidth: 300) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Home" />
      <h1>A Tech Conference for Collaboration</h1>
      <br/>
      <div className={heroStyles.card}>
        <h3>We’ll be live, in-person, at the Scott Conference Center.</h3>
        <h2>Monday, July 25th 2022.</h2>
        <div align="center">
          <a className="button" href="https://www.eventbrite.com/e/connectaha-technical-conference-2022-tickets-310823249707" target="_blank">
            <h4>Get your ticket today!</h4>
          </a>
        </div>
      </div>
      <br/>
      <h2>Included with ticket:</h2>
      <h3>7 Speakers</h3>
      <h3>Connect with 100+ Attendees</h3>
      <h3>Breakfast, Lunch, Snacks and Happy Hour</h3>
      <h3>Conference Swag</h3>
      <br/>
      <hr className={scheduleStyles.divider} />
      <br/>

      <Head title="Speakers" />
      <h2>Speakers</h2>
      <div className={speakersStyles.speakers}>
        {data.allContentfulSpeakers.edges.map(edge => {
          return <Speaker key={edge.slug} edge={edge}></Speaker>
        })}
      </div>
      <br/>
      <hr className={scheduleStyles.divider} />
      <br/>
      <h2>2022 Sponsors</h2>
      <ol className={sponsorsStyles.sponsors}>
        {data.allContentfulTier1.edges.map(edge => {
          return (
            <li className={sponsorsStyles.sponsor} key={edge.node.slug}>
              <div>
                <a
                  href={edge.node.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {edge.node.image && <Img fluid={edge.node.image.fluid} />}{" "}
                </a>
              </div>
            </li>
          )
        })}
      </ol>
      <br/>
      <hr className={scheduleStyles.divider} />
      <br/>
      <h2>We still believe:</h2>
      <h3>Everyone can learn from anyone</h3>
      <h3>Quality only happens when the entire team is aligned</h3>
      <h3>Those with less experience provide as much value as those with more experience</h3>
      <h3>There’s power when people talk</h3>
      <br/>
    </Layout>
  )
}

export default IndexPage
