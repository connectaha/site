import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ( { title, ogImage, ogTitle, ogUrl }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const metadata = [{
        name: 'og:site_name',
        content: "Connectaha Conference"
    }];

    if(ogTitle){
        metadata.push({name: 'og:title', content: ogTitle});
    }

    if(ogImage){
        metadata.push({name: 'og:image', content: ogImage});
    }

    if(ogUrl){
        metadata.push({name: 'og:url', content: ogUrl});
    }

    const pageTitle = ogTitle ? ogTitle : `${title} | ${data.site.siteMetadata.title}`;

    return (
        <Helmet title={pageTitle} meta={metadata} />
    )
}

export default Head