import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
`)

    return (
        <footer className={footerStyles.footer}>
            <p>Follow us on <a href="https://twitter.com/connectaha">Twitter</a> or{" "}
            <a href="https://www.linkedin.com/company/connectaha">LinkedIn</a> for more details like tickets, speakers and more!
            </p>
            <p>{data.site.siteMetadata.author} ©2022</p>
            
        </footer>
    )
}

export default Footer
