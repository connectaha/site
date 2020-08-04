import React from "react"

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>Contact us via <a href="https://twitter.com/connectaha" target="_blank" rel="noopener noreferrer" >@connectaha</a> at Twitter</p>
        </Layout>
    )
}

export default AboutPage
