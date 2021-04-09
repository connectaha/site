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
            <div align="center">
                <a class="button" href="https://zoom.us/j/96643437798?pwd=bCt0dXRIMjJJWkpiWmhZVVRBM292dz09" target="_blank">Join Us Live!</a>
            </div>
            <h1>Join us on April 9, 2021</h1>
            <h3 className={heroStyles.description}>Our goal is for people to grow quality connections in a diverse environment. Attendees, speakers and sponsors exchanging new ideas, knowledge and views.</h3>

            <hr className={heroStyles.divider} />

            <h2>2021? Really?</h2>
            <p>Yes, we're <em>really</em> having a Connectaha in 2021. In fact, we've already got a date. It's April 9th, and we hope you'll join us.</p>

            <h2>Hmmm..I'm not sure I'm ready to be in a big gathering</h2>
            <p>We hear you, and neither are we. Or to be more accurate, we're not sure it's <strong>safe</strong> yet, and the last thing we want to do is put anyone in harm's way. So Connectaha 2021 is virtual, all online.</p>

            <h2>I don't know. I've tried a couple virtual conferences and they haven't been my thing.</h2>
            <p>We get it. Virtual conferences can be hard as an audience member. And with all of the tracts and talks we had in 2020, a virtual Connectaha would likely be taxing for everyone involved.</p>
            <p>We have good news though. While we still want to expose people to great ideas, we know we can't do it in the same old way as in the past, so we've made some changes</p>

            <ul className={heroStyles.spacing}>
                <li>
                    <h3>Tell me a story</h3>
                    <p>That's the theme for 2021. We want our speakers to tell you a personal story about their time in tech, and if you check out the <Link to="/schedule">schedule</Link>, you'll see that's exactly what they're doing.</p>
                </li>
                <li>
                    <h3>Focused talks</h3>
                    <p>When we're in person, hour long talks are great. It allows people to really dive in to the topic, take questions, and even build in time for demo failures ('cause someone's demo will fail.) But virtual, that's a long time. So each of our slots are only 30 minutes.</p>
                </li>
                <li>
                    <h3>Short time commitment</h3>
                    <p>With the focused talks and limited speakers, Connectaha 2021 will be about 4 hours. Long enough to let you hear some great talks, but not too long that you're drained afterwards. And, since it's a Friday, we won't tell if you knock off a little early.</p>
                </li>
                <li>
                    <h3>Various topics</h3>
                    <p>Even with the theme of "Tell me a story" we have talks from a variety of <Link to="/speakers">roles</Link>. We have UX, QA, Product, Accessibilty and other topics. You're sure to find something that reaches you.</p>
                </li>
                <li>
                    <h3>Completely <em>free</em> for you</h3>
                    <p>It can be hard justifying paying for a conference that you watch online, and so in 2021, you don't have to! We're partnering with some <strong>GREAT</strong> <Link to="/sponsors">sponsors</Link>, and they're footing the bill so that you can enjoy great content.</p>
                </li>
            </ul>

            <p>So does that sound like something you'd be interested in? If so, grab your <a href="https://www.eventbrite.com/e/connectaha-technical-conference-tickets-136818187883" target="_blank">free ticket</a> and we'll send out the streaming information so you can be a part of Connectaha 2021.</p>

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
            <h2>2021 Sponsors</h2>
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