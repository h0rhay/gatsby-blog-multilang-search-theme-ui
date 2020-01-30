import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          html
          id
          frontmatter {
            title
            slug
            published
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    published: post.frontmatter.published,
    html: post.html,
    id: post.id
  }))
}

export default usePosts