import React from "react"

import Hero from '../components/hero'
import Layout from '../components/layout'
import Head from '../components/head'
import heroStyles from "../components/hero.module.scss"
import { graphql, useStaticQuery } from 'gatsby'
import sponsorsStyles from './sponsors.module.scss'
import Img from "gatsby-image"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulTier1 ( sort: { fields: sponsorTitle, order: ASC } ) {
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
        }
    `)

    return (
        <Layout>
            <Head title="Home" />
            <hr className={heroStyles.divider} />
            <Hero />
            <hr className={heroStyles.divider} />
            <h3 className={heroStyles.description}>Our goal is for people to grow quality connections in a diverse environment. Attendees, speakers and sponsors exchanging new ideas, knowledge and views.</h3>
            <h2>What to Expect</h2>
            <ul className={heroStyles.spacing}>
                <li>6 Speakers</li>
                <li>30 minute sessions</li>
                <li>Streaming for free</li>
                <li>Sessions will be recorded</li>
            </ul>
            <h2>Vision</h2>
            <p className={heroStyles.spacing}>Our vision is to grow quality connections in the Nebraska tech community.</p>
            <h2>Goal</h2>
            <p className={heroStyles.spacing}>For people to exchange new ideas, knowledge and views of technology.</p>
            <h2>Principles</h2>
            <ul className={heroStyles.spacing}>
                <li>Quality</li>
                <li>Sustainable</li>
                <li>Modern & Adaptable</li>
                <li>Inclusive</li>
                <li>Genuine</li>
                <li>Supportive</li>
            </ul>
            <h2>2021 Tier 1 Sponsors</h2>
            <ol className={sponsorsStyles.sponsors}>
                {data.allContentfulTier1.edges.map((edge) => {
                    return (
                        <li className={sponsorsStyles.sponsor}>
                            <div>
                                <a href={edge.node.website} target="_blank" rel="noopener noreferrer">{edge.node.image && (<Img fluid={edge.node.image.fluid} /> )} </a>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default IndexPage