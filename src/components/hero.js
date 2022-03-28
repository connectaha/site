import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import heroStyles from "../components/hero.module.scss"

const Hero = props => {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "images/confImage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
      <BackgroundImage
        className={heroStyles.banner}
        fluid={data.bannerImage.childImageSharp.fluid}>  
      </BackgroundImage>
  )
}
export default Hero