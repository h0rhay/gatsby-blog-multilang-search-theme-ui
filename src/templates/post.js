import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SiteWrapConstrainer from '../components/siteWrapConstrainer'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        published
        tags
      }
    }
  }
`

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SiteWrapConstrainer>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>{post.frontmatter.tags.map(tag => <span>{tag} </span>)}</p>
        <Link to="/">&larr; back to all posts</Link>
      </SiteWrapConstrainer>
    </Layout>
  )
};

export default PostTemplate