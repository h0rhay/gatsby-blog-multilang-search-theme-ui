import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteWrapConstrainer from "../components/siteWrapConstrainer"
import HomeLink from "../components/homeLink"

const SecondPage = () => (
  <Layout>
    <SiteWrapConstrainer>
      <SEO title="About Page" />
      <h1>Hi from the About page</h1>
      <p>Welcome to another lovely page where you can add some more info about your lovely project./</p>
      <HomeLink />
    </SiteWrapConstrainer>
  </Layout>
)

export default SecondPage