import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'


export const query = graphql`
    query($slug: String!) {
        contentfulSponsors(slug: {eq: $slug}) {
            sponsorTitle
        }
    }
`



const Sponsors = props => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.sponsorTitle['en-US']
                const url = node.data.target.fields.file['en-US'].url
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulSponsors.name}/>
            <h1>{props.data.contentfulSponsors.sponsorTitle, options}</h1>
            {documentToReactComponents(props.data.contentfulSponsors.sponsorTitle, options)}
        </Layout>
    )
}

export default Sponsors