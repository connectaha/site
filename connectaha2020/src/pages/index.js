import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h2>A technical conference that believes there's power when people talk</h2>
            <p>Grab your ticket now: <Link to="https://www.eventbrite.com">Buy a ticket</Link></p>
        </Layout>
    )
}

export default IndexPage
