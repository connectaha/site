module.exports = {
    siteMetadata: {
        title: `Connectaha Tech Conference`,
        author: `Connectaha`
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
                options: {
                    name: `src`,
                    path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`
    ]
}