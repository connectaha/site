import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import sponsorsStyles from './sponsors.module.scss'
import Img from "gatsby-image"

import Layout from '../components/layout'
import Head from '../components/head'

const SponsorsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulSponsors ( sort: { fields: sponsorTitle, order: ASC } ) {
                edges {
                    node {
                        sponsorTitle
                        slug
                        website
                        sponsorImage {
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
            <h1>Sponsors</h1>
            <ol className={sponsorsStyles.sponsors}>
                {data.allContentfulSponsors.edges.map((edge) => {
                    return (
                        <li className={sponsorsStyles.sponsor}>
                            <div>
                                <h2>{edge.node.sponsorTitle}</h2>
                                <a href={edge.node.website} target="_blank" rel="noopener noreferrer">{edge.node.sponsorImage && (<Img fluid={edge.node.sponsorImage.fluid} /> )} </a>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default SponsorsPage