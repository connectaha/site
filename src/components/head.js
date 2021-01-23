import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ( { title, ogTitle }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`} meta={[{
            name: `twitter:title`,
            content: ogTitle,
        }]} />
    )
}

export default Head