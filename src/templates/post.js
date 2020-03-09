import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import HomeLink from '../components/homeLink'
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
        parent
        order
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
        <p>
          <strong>Tags: </strong>
          {post.frontmatter.tags.map((tag, i) => <span key={`tag-${i}`}>{(i ? ', ' : '')}{tag}</span>)}
        </p>
        <HomeLink />
      </SiteWrapConstrainer>
    </Layout>
  )
};

export default PostTemplate