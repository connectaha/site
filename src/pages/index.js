import React from "react"
import { Link, Button } from 'gatsby'
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
            {/*<div align="center">
                <a class="button" href="https://www.eventbrite.com/e/connectaha-technical-conference-tickets-136818187883" target="_blank">Reserve your free ticket today!</a>
    </div>*/}
            

            {/* <h2>Our Vision</h2>
            <p className={heroStyles.spacing}>Our vision is to grow quality connections in the Nebraska tech community.</p>
            <h2>Our Goal</h2>
            <p className={heroStyles.spacing}>For people to exchange new ideas, knowledge and views of technology.</p>
            <h2>Our Principles</h2>
            <ul className={heroStyles.spacing}>
                <li>Quality</li>
                <li>Sustainable</li>
                <li>Modern & Adaptable</li>
                <li>Inclusive</li>
                <li>Genuine</li>
                <li>Supportive</li>
            </ul> */}
            <h2>We're coming back.</h2>
            <h3>In person!</h3>
            <p>It’s true, Connectaha is coming back in person this year. We’ll be live at the Scott Conference Center on Monday, <b>July 25th.</b> And while we’re going to be back in person, we’re also going to be changing things up a bit.</p>
            <p>The main theme of how we’re changing we stole from software development, we’re doing a <strong>Minimum Valuable Product!</strong> We know we want to be in person and also be adaptable to the ever changing pandemic. So as we started planning, we asked ourselves “How can we put on a quality conference that doesn’t take 6 months to plan?” And as we answered that question, it started to shape how we’d do things this year.</p>
            <p>But before we get to the changes, let’s cover what isn’t changing.</p><p>As we mentioned, we’ll still be at the Scott because it’s a great facility that is centrally located, provides good food and great wifi. Additionally, our focus hasn’t changed.</p>
            <h3>We still believe:</h3>
                <ul>
                    <li>Everyone can learn from anyone</li>
                    <li>Quality only happens when the entire team is aligned</li>
                    <li>Those with less experience provide as much value as those with more experience</li>
                    <li>There’s power when people talk</li>
                </ul>
            <p>If that approach is remaining the same, then what has changed?</p>
            <p>The most noticeable change is that for this year, we’re going to be a single track conference of keynotes. We’ll still provide you with a variety of topics, high quality speakers, and a chance to network with others from around the region!</p>
            <p>Watch <a href="https://twitter.com/connectaha">Twitter</a> or <a href="https://www.linkedin.com/company/connectaha">LinkedIn</a> for more details like tickets, speakers and more!</p>
            <p>If you’re interested in sponsoring email us at admin at connectaha.com</p>
            
            {/*<h2>2021 Sponsors</h2>
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
            </ol>*/}
        </Layout>
    )
}

export default IndexPage