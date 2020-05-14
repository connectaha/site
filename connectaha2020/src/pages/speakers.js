import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import speakersStyles from './speakers.module.scss'

import Layout from '../components/layout'

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
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Speakers</h1>
            <ol className={speakersStyles.speakers}>
                {data.allContentfulSpeakers.edges.map((edge) => {
                    return (
                        <li className={speakersStyles.speaker}>
                            <Link to={`/speakers/${edge.node.slug}`}>
                                <h2>{edge.node.name} | {edge.node.company}</h2>
                                <p>{edge.node.session}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default SpeakersPage