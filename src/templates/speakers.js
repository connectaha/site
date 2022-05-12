import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulSpeakers(slug: { eq: $slug }) {
      name
      company
      session
      image {
        file {
          url
        }
      }
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
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  console.log("Props", props)

  return (
    <Layout>
      <Head
        title={props.data.contentfulSpeakers.name}
        ogTitle={`${props.data.contentfulSpeakers.name} - ${props.data.contentfulSpeakers.session}`}
        ogUrl={props.location.href}
        ogImage={props.data.contentfulSpeakers.image.file.url}
      />
      <h1>
        {props.data.contentfulSpeakers.name} |{" "}
        {props.data.contentfulSpeakers.company}
      </h1>
      <h3>{props.data.contentfulSpeakers.session}</h3>
      <div>
        {documentToReactComponents(
          props.data.contentfulSpeakers.abstract &&
            props.data.contentfulSpeakers.abstract.json,
          options
        )}
      </div>
      <h3>Bio</h3>
      {documentToReactComponents(
        props.data.contentfulSpeakers.bio.json,
        options
      )}
    </Layout>
  )
}

export default Speakers
