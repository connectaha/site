import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'


export const query = graphql`
    query($slug: String!) {
        contentfulSpeakers(slug: {eq: $slug}) {
            name
            company
            session
            bio {
                json
            }
            abstract {
                json
            }
        }
    }
`

const Speakers = props => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.name['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    
    return (
        <Layout>
            <h1>{props.data.contentfulSpeakers.name} | {props.data.contentfulSpeakers.company}</h1>
            <h3>{props.data.contentfulSpeakers.session}</h3>
            {documentToReactComponents(props.data.contentfulSpeakers.abstract.json)}
            <h3>Bio</h3>
            {documentToReactComponents(props.data.contentfulSpeakers.bio.json)}
        </Layout>
    )
}

export default Speakers