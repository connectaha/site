import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import speakersStyles from './speakers.module.scss'
import Head from '../components/head'
import scheduleStyles from './schedule.module.scss'

const SpeakersPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulSpeakers ( sort: { fields: name, order: ASC } ) {
                edges {
                    node {
                        name
                        slug
                        company
                        session
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
            <Head title="Speakers" />
            <h1>Speakers</h1>
            <ol className={speakersStyles.speakers}>
                {data.allContentfulSpeakers.edges.map((edge) => {
                    return (
                        <li className={speakersStyles.speaker}>
                            <Link to={`/speakers/${edge.node.slug}`}>
                                <div>
                                    {edge.node.image && (
                                        <Img fluid={edge.node.image.fluid} /> 
                                    )}
                                </div>
                                <h3>{edge.node.name}</h3>
                                <h3>{edge.node.company}</h3>
                                <h4>{edge.node.session}</h4>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default SpeakersPage