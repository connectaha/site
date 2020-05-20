const path = require('path')


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const speakersTemplate = path.resolve('./src/templates/speakers.js')
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
            component: speakersTemplate,
            path: `/speakers/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}