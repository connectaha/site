import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import speakersStyles from './speakers.module.scss'
import Head from '../components/head'


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
                                <h2>{edge.node.name} | {edge.node.company}</h2>
                                <p>{edge.node.session}</p>
                                <div>
                                    {edge.node.image && (
                                        <Img fluid={edge.node.image.fluid} /> 
                                    )}
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default SpeakersPage