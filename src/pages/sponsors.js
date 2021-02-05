import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import sponsorsStyles from './sponsors.module.scss'
import Img from "gatsby-image"

import Layout from '../components/layout'
import Head from '../components/head'

const SponsorsPage = () => {
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
            <Head title="Sponsors" />
            <h1>2021 Sponsors</h1>
            <div align="center">
                <a class="prospectus" href="https://drive.google.com/file/d/1S-NulgLtNfbFo4DPm6qB94He-VjYOLBi/view?usp=sharing" target="_blank">Open 2021 Connectaha Prospectus</a>
            </div>
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

export default SponsorsPage