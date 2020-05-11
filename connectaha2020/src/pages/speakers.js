import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const SpeakersPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Sponsors</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default SpeakersPage