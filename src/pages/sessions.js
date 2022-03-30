import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import sessionsStyles from './sessions.module.scss'
import scheduleStyles from './schedule.module.scss'
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
                                <h3>{edge.node.session}</h3>
                                <h4>{edge.node.name} | {edge.node.company}</h4>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default SessionsPage