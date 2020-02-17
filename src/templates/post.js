import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SiteWrapConstrainer from '../components/siteWrapConstrainer'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        published
      }
    }
  }
`

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SiteWrapConstrainer>
        {console.log(data.markdownRemark)}
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to="/">&larr; back to all posts</Link>
      </SiteWrapConstrainer>
    </Layout>
  )
};

export default PostTemplate