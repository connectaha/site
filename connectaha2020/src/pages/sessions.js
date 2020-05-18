import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import sessionsStyles from './sessions.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'

const SessionsPage = () => {
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
            <Head title="Sessions" />
            <h1>Sessions</h1>
            <ol className={sessionsStyles.sessions}>
                {data.allContentfulSpeakers.edges.map((edge) => {
                    return (
                        <li className={sessionsStyles.session}>
                            <Link to={`/speakers/${edge.node.slug}`}>
                                <h2>{edge.node.session}</h2>
                                <p>{edge.node.name} | {edge.node.company}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default SessionsPage