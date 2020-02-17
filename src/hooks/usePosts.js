import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          html
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
            published
          }
        }
      }
    }
  `)

  const filteredPosts = data.allMarkdownRemark.nodes.filter(node => !!node.frontmatter.published)

  return filteredPosts.map(post => ({
    title: post.frontmatter.title,
    slug: post.fields.slug,
    published: post.frontmatter.published,
    html: post.html,
    excerpt: post.excerpt,
    id: post.id,
    tags: post.frontmatter.tags
  }))
}

export default usePosts