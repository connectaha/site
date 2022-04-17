import React from "react"
import { Link, Button } from "gatsby"
import Hero from "../components/hero"
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

      <h1>We're coming back.</h1>
      <h2>In-person!</h2>

      <div className={heroStyles.card}>
        <h3>
          We’ll be live at the Scott Conference Center on Monday,{" "}
          <b>July 25th 2022.</b>
        </h3>
        <div align="center">
          <a
            className="button"
            href="https://www.eventbrite.com/e/connectaha-technical-conference-2022-tickets-310823249707"
            target="_blank"
          >
            <h4>Get your ticket today!</h4>
          </a>
        </div>
      </div>

      <p>
        The main theme of how we’re changing we stole from software development,
        we’re doing a <strong>Minimum Valuable Product!</strong> We know we want
        to be in person and also be adaptable to the ever changing pandemic. So
        as we started planning, we asked ourselves “How can we put on a quality
        conference that doesn’t take 6 months to plan?” And as we answered that
        question, it started to shape how we’d do things this year.
      </p>
      <p>But before we get to the changes, let’s cover what isn’t changing.</p>
      <p>
        As we mentioned, we’ll still be at the Scott because it’s a great
        facility that is centrally located, provides good food and great wifi.
        Additionally, our focus hasn’t changed.
      </p>

      <h5>We still believe:</h5>
      <ul>
        <li>Everyone can learn from anyone</li>
        <li>Quality only happens when the entire team is aligned</li>
        <li>
          Those with less experience provide as much value as those with more
          experience
        </li>
        <li>There’s power when people talk</li>
      </ul>

      <p>If that approach is remaining the same, then what has changed?</p>
      <p>
        The most noticeable change is that for this year, we’re going to be a
        single track conference of keynotes. We’ll still provide you with a
        variety of topics, high quality speakers, and a chance to network with
        others from around the region!
      </p>
      <p>
        Watch <a href="https://twitter.com/connectaha">Twitter</a> or{" "}
        <a href="https://www.linkedin.com/company/connectaha">LinkedIn</a> for
        more details like tickets, speakers and more!
      </p>

      <Head title="Speakers" />
      <h1>Speakers</h1>
      <div className={speakersStyles.speakers}>
        {data.allContentfulSpeakers.edges.map(edge => {
          return <Speaker key={edge.slug} edge={edge}></Speaker>
        })}
      </div>

      <h2>2022 Sponsors</h2>
      <p>
        If you’re interested in sponsoring email us at admin at connectaha.com
      </p>
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
    </Layout>
  )
}

export default IndexPage
