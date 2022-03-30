module.exports = {
    siteMetadata: {
        title: `Connectaha Technical Conference`,
        author: `Connectaha`
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
              rule: {
                include: /images/
              }
            }
          },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
                options: {
                    name: `src`,
                    path: `${__dirname}/src/`
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-relative-images`,
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}