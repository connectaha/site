const path = require('path')


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const speakerTemplate = path.resolve('./src/templates/speakers.js')
    const res = await graphql(`
        query {
           allContentfulSpeakers {
               edges {
                   node {
                       slug
                   }
               }
           }
        }
    `)

    res.data.allContentfulSpeakers.edges.forEach((edge) => {
        createPage({
            component: speakerTemplate,
            path: `/speakers/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const sponsorTemplate = path.resolve('./src/templates/sponsors.js')
    const res = await graphql(`
        query {
           allContentfulSponsors {
               edges {
                   node {
                       slug
                   }
               }
           }
        }
    `)

    res.data.allContentfulSponsors.edges.forEach((edge) => {
        createPage({
            component: sponsorTemplate,
            path: `/sponsors/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

}