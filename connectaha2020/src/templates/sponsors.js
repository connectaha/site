import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'


export const query = graphql`
    query($slug: String!) {
        contentfulSponsors(slug: {eq: $slug}) {
            sponsorTitle
        }
    }
`

const Sponsors = (props) => {
    return (
        <Layout>
            <h1>{props.data.contentfulSpeakers.sponsorTitle}</h1>
        </Layout>
    )
}

export default Sponsors