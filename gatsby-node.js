const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const speakersTemplate = path.resolve("./src/templates/speakers.js")
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

  res.data.allContentfulSpeakers.edges.forEach(edge => {
    createPage({
      component: speakersTemplate,
      path: `/speakers/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

module.exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ContentfulSpeakers implements Node {
      session: String,
       name: String,
       slug: String,
       company: String,
       title: String
    }
  `
  createTypes(typeDefs)
}
