import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from '../components/postList'
import SiteWrapConstrainer from "../components/siteWrapConstrainer"
import HomeLink from "../components/homeLink"

const SecondPage = () => (
  <Layout>
    <SiteWrapConstrainer>
      <SEO title="Blog Page" />
      <h1>Read the blog</h1>
      <p>This is an amazing journal of life on the front end.</p>
      <PostList />
      <HomeLink />
    </SiteWrapConstrainer>
  </Layout>
)

export default SecondPage
