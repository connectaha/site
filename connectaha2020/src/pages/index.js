import React from "react"

import Hero from '../components/hero'
import Layout from '../components/layout'
import Head from '../components/head'
import heroStyles from "../components/hero.module.scss"

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <Hero />
            <h3 className={heroStyles.description}>Our goal is for people to grow quality connections in a diverse environment. Attendees, speakers and sponsors exchanging new ideas, knowledge and views.</h3>
            <hr className={heroStyles.divider} />
            <h2>What to Expect</h2>
            <p>Our conference is a one day event hosted at the <a href="url">Walter Scott Conference Center</a> in Omaha, NE. Throughout the day we will host 6 sessions with 5 simultaneous talks. We'll have a diverse range of topics covered by 30 speakers.</p>
            <hr className={heroStyles.divider} />
            <h2>2021 Sponsors</h2>
            <hr className={heroStyles.divider} />
        </Layout>
    )
}

export default IndexPage