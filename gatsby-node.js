exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
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
      path: post.node.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.node.frontmatter.slug
      }
    })
  })
}