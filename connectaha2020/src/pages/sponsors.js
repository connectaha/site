import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
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
                            <Link to={`/sponsors/${edge.node.slug}`}>
                                <h2>{edge.node.sponsorTitle}</h2>
                                <div>{edge.node.sponsorImage && (<Img fluid={edge.node.sponsorImage.fluid} /> )}</div>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default SponsorsPage