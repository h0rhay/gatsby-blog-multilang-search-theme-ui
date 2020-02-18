import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostList from '../components/PostList'
import SiteWrapConstrainer from "../components/siteWrapConstrainer"

const IndexPage = () => (
  <Layout>
    <SiteWrapConstrainer>
      <SEO title="Home" />
      <h1>Welcome to Gatsby Simplz!</h1>
      <h2>A simple Gatsby Starter site with the following functionality:</h2>
      <ul>
        <li>Blog post pages</li>
        <li>Search functionality</li>
      </ul>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <PostList />
    </SiteWrapConstrainer>
  </Layout>
)

export default IndexPage
