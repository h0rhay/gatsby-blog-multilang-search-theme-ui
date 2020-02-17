const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Failed to create posts', result.errors)
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(post => {
    actions.createPage({
      path: post.node.fields.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.node.fields.slug
      }
    })
  })
}