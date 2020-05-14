import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import sponsorsStyles from './sponsors.module.scss'

import Layout from '../components/layout'

const SponsorsPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulSponsors ( sort: { fields: sponsorTitle, order: ASC } ) {
                edges {
                    node {
                        sponsorTitle
                        slug
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Sponsors</h1>
            <ol className={sponsorsStyles.sponsors}>
                {data.allContentfulSponsors.edges.map((edge) => {
                    return (
                        <li className={sponsorsStyles.sponsor}>
                            <Link to={`/sponsor/${edge.node.slug}`}>
                                <h2>{edge.node.sponsorTitle}</h2>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default SponsorsPage